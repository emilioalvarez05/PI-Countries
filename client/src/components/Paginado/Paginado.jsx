import React from "react";
import style from './paginado.module.css'

export default function Paginado ({countriesPerPage, allCountries, paginado, currentPage, beforePage, nextPage}){
    const numberOfPage = []

    for(var i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        numberOfPage.push(i)
    }

    return(
        <div className={style.padre}>
        <nav className={style.nav}>
            <ul className={style.ul}>
            <button className={currentPage === "Anterior" ? style.botonSeleccionado : style.boton} onClick={beforePage}>Anterior</button>
            
                { numberOfPage && 
                numberOfPage.map(numero =>(                    
                    <li className={style.li} key={numero}>
                       <button className={currentPage === numero ? style.botonSeleccionado : style.boton } onClick={() => paginado(numero)}>{numero}</button>
                    </li>
                ))}
            <button className={currentPage === "Proximo" ? style.botonSeleccionado : style.boton} onClick={nextPage}>Proximo</button>
            </ul>
        </nav>
        </div>
    )
}



