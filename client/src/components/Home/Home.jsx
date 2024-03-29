import style from "./home.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllCountries, getActivity } from "../../store/actions"
import CountryCard from "../CountryCard/CountryCard"
import Paginado from "../Paginado/Paginado"
import { useState } from "react"
import Filter from "../Filter/Filter"

const Home = () => {

    const countries = useSelector(state => state.countries)
    const allCountries = useSelector(state => state.allCountries)
    const touristActivity = useSelector(state => state.touristActivity)
    const dispatch = useDispatch()
    

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10)
    const indexLastCountries = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1;
    const indexFirstCountries = currentPage === 1 ? 0 : indexLastCountries - countriesPerPage;
    const currentCountries = countries.slice(indexFirstCountries, indexLastCountries);

    const paginado = (numberOfPage) => {
        setCurrentPage(numberOfPage);
      
    };


    useEffect(() => {
        if(allCountries.length === 0){
            dispatch(getAllCountries())
        }
        let lastPage = 1 + Math.ceil(countries.length / countriesPerPage);
        if (currentPage > lastPage) {
            setCurrentPage(1);
        }
        if(touristActivity.length === 0){
            dispatch(getActivity())
        }
    },[countries.length, touristActivity.length, allCountries.length, countriesPerPage, currentPage, dispatch])

    return(

        <div className={style.contenedor}>

            <div>
                <Filter/>
            </div>

            <div>
                <Paginado
                    countriesPerPage={countriesPerPage}
                    countries={countries.length}
                    paginado={paginado}
                    currentPage={currentPage}
                   // beforePage={beforePage}
                   // nextPage={nextPage}
                />
            </div>
            <div className={style.card}>
            {currentCountries && currentCountries.length > 0 ? (currentCountries?.map(country => {
                return(
                    
                    <CountryCard
                    key = {country.id} 
                    id = {country.id}
                    flags = {country.flags}
                    name = {country.name}
                    continents = {country.continents}
                    />
                )
            })) : <div className={style.cargando}>
                 <h1>Cargando...</h1> 
                 </div>
        }
        </div>
        </div>

    )
    
}


export default Home