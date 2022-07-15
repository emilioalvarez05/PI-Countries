import { Link } from "react-router-dom"
import style from "./landingPage.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAllCountries, getActivity } from "../../store/actions"

const LandingPage = () => {

    const allCountries = useSelector(state => state.allCountries)
    const touristActivity = useSelector (state => state.touristActivity)
    const dispatch = useDispatch()
    

    useEffect(() => {
        if(allCountries.length === 0){
            dispatch(getAllCountries())
        }

        if(touristActivity.length === 0){
            dispatch(getActivity())
        }
    },[allCountries.length, touristActivity.length, dispatch])



    return(
        <div className={style.contenedor}>
            <div className={style.divTitulo}>
            <h1 className={style.titulo}>Bienvenido a Henry-Country</h1>
            </div>
            <div className={style.divBoton}>
            
            <Link to={"/home"}>
            <button className={style.boton}>INGRESAR</button>
            </Link>
            </div>
            
        </div>

    )
    
}


export default LandingPage