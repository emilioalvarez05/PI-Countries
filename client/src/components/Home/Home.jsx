import style from "./home.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllCountries } from "../../store/actions"
import CountryCard from "../CountryCard/CountryCard"
import Paginado from "../Paginado/Paginado"
import { useState } from "react"
import Filter from "../Filter/Filter"

const Home = () => {

    const countries = useSelector(state => state.countries)
    const allCountries = useSelector(state => state.allCountries)
    const dispatch = useDispatch()
    //console.log(allCountries)

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10)
    const indexLastCountries = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1;
    const indexFirstCountries = currentPage === 1 ? 0 : indexLastCountries - countriesPerPage;
    const currentCountries = countries.slice(indexFirstCountries, indexLastCountries);

    const paginado = (numberOfPage) => {
        setCurrentPage(numberOfPage);
      
    };

    function beforePage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function nextPage() {
        let lastPage = Math.ceil(countries.length / countriesPerPage);
        if (currentPage <= lastPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        if(allCountries.length === 0){
            dispatch(getAllCountries())
        }
        let lastPage = Math.ceil(countries.length / countriesPerPage);
        if (currentPage > lastPage) {
            setCurrentPage(1);
        }
    },[countries.length, dispatch])
   // console.log(allCountries)

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
                    beforePage={beforePage}
                    nextPage={nextPage}
                />
            </div>
            <div className={style.card}>
            {currentCountries.length ? (currentCountries?.map(country => {
                return(
                    
                    <CountryCard
                    key = {country.id} 
                    id = {country.id}
                    flags = {country.flags}
                    name = {country.name}
                    continents = {country.continents}
                    />
                )
            })) : <h1>Cargando</h1> 
        }
        </div>
        </div>

    )
    
}


export default Home