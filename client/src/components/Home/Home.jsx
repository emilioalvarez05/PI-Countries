import style from "./home.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllCountries } from "../../store/actions"
import CountryCard from "../CountryCard/CountryCard"

const Home = () => {

    const allCountries = useSelector(state => state.allCountries)
    const dispatch = useDispatch()
    //console.log(allCountries)

    useEffect(() => {
        if(allCountries.length === 0){
            dispatch(getAllCountries())
        }
    },[allCountries.length, dispatch])
    //console.log(allCountries)

    return(
        <div className={style.contenedor}>
            {allCountries.length ? (allCountries?.map(country => {
                return(
                    
                    <CountryCard
                    key = {country.id} 
                    id = {country.id}
                    flags = {country.flags}
                    name = {country.name}
                    continents = {country.continents}
                    />
                )
            })) : <h1>Cargando</h1>}
        </div>

    )
    
}


export default Home