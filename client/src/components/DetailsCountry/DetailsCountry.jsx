import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCountryById } from "../../store/actions"
import style from "./detailsCountry.module.css"



const DetailsCountry = () => {

    const countryDetail = useSelector(state => state.countriesDetail)
    const dispatch = useDispatch()
    const {id} = useParams()
    //console.log(id, "soy id")
    useEffect(() => {
       dispatch(getCountryById(id))

    },[dispatch])
    //console.log(countryDetail)

    if(!countryDetail.id) {
        return (
            <div>Estamos buscando el pais</div>
        )
    }
    return(
        <div className={style.contenedor}>
        <div className={style.card}>
                <img className={style.imagen} width= "20%" src={countryDetail.flags} alt="No Found"/>
                <h1 className={style.name}>Name:{countryDetail.name}</h1>
                <h1 className={style.name}>Codigo:{countryDetail.id}</h1>
                <h1 className={style.name}>Continente:{countryDetail.continents}</h1>
                <h2 className={style.name}>Capital:{countryDetail.capital}</h2>
                <h3 className={style.name}>Subregion:{countryDetail.subregion}</h3>
                <h1 className={style.name}>Area:{countryDetail.area} km2</h1>
                <h1 className={style.name}>Poblacion:{countryDetail.population}</h1>
                <h1 className={style.name}>Actividad</h1>        
            

        </div>
        </div>

    )
}

export default DetailsCountry