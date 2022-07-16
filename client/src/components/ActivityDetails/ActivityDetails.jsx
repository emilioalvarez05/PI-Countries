import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getActivity } from "../../store/actions"
import style from "./activityDetails.module.css"




const ActivityDetails = ({name, difficulty, duration, season}) => {
    
    const touristActivity = useSelector(state => state.touristActivity)
    const countryDetail = useSelector(state => state.countriesDetail)
    
    const dispatch = useDispatch()
    
    useEffect(() =>{
        if(touristActivity.length === 0){
            dispatch(getActivity())
        }
    })

    return (

        <div>

            <p className={style.titulo}>Nombre de la actividad: </p>
            <p>{name}</p>
            <p className={style.titulo}>Dificultad: </p>
            <p>{difficulty}</p>
            <p className={style.titulo}>Duracion: </p>
            <p>{duration}</p>
            <p className={style.titulo}>Temporada: </p>
            <p>{season}</p>
            <p>{countryDetail.id}</p>
            

        </div>
    )



}


export default ActivityDetails
