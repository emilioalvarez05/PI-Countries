import React from "react";
import style from './paginado.module.css'

export default function Paginado ({countriesPerPage, countries, paginado, currentPage, beforePage, nextPage}){
    const numberOfPage = []

    const maxPage = 1 + Math.ceil((countries - 9) / countriesPerPage)

    for(var i = 1; i <= maxPage; i++){
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



