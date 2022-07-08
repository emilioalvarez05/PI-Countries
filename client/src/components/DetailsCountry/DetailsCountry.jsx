import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCountryById } from "../../store/actions"



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

        <div>
                <img src={countryDetail.flags}/>
                <h1>Name:{countryDetail.name}</h1>
                <h2>Codigo:{countryDetail.id}</h2>
                <h3>Continente:{countryDetail.continents}</h3>
                <h4>Capital:{countryDetail.capital}</h4>
                <h5>Subregion:{countryDetail.subregion}</h5>
                <h6>Area:{countryDetail.area}</h6>
                <h6>Poblacion:{countryDetail.population}</h6>
                <h6>Actividad</h6>        
            

        </div>


    )
}

export default DetailsCountry