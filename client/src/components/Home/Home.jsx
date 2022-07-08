import style from "./home.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllCountries } from "../../store/actions"
import CountryCard from "../CountryCard/CountryCard"
import Paginado from "../Paginado/Paginado"
import { useState } from "react"

const Home = () => {

    const allCountries = useSelector(state => state.allCountries)
    const dispatch = useDispatch()
    //console.log(allCountries)

    const [currentPage, setCurrentPage] = useState(1);
  //  const [countriesPerPage, setCountriesPerPage] = useState(9);
    const countriesPerPage = currentPage === 1 ? 9 : 10
    const indexLastCountries = currentPage * countriesPerPage;
    const indexFirstCountries = indexLastCountries - countriesPerPage;
    const currentCountries = allCountries.slice(indexFirstCountries, indexLastCountries);

    const paginado = (numberOfPage) => {
        setCurrentPage(numberOfPage);
      
    };

    function beforePage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function nextPage() {
        let lastPage = Math.ceil(allCountries.length / countriesPerPage);
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        if(allCountries.length === 0){
            dispatch(getAllCountries())
        }
        let lastPage = Math.ceil(allCountries.length / countriesPerPage);
        if (currentPage > lastPage) {
            setCurrentPage(1);
        }
    },[allCountries.length, dispatch])
    //console.log(allCountries)

    return(

        <div className={style.contenedor}>

            <div>
                <Paginado
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    paginado={paginado}
                    currentPage={currentPage}
                    beforePage={beforePage}
                    nextPage={nextPage}
                />
            </div>

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
            })) : <h1>Cargando</h1> || alert("no se encontro el pais")//<h1>Cargando</h1>
        }
        </div>

    )
    
}


export default Home