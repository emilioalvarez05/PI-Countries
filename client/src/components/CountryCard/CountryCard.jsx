import { Link } from "react-router-dom"
import style  from "./countryCard.module.css"



const CountryCard = ({flags, name, continents, id}) => {

    return(

        <div className={style.contenedor}>
            <Link to={"/details/" + id} className={style.link}>
            <h2>Name: {name}</h2>     
            <h3>Continents: {continents}</h3>    
            <img className={style.imagen} width= "75%" src={flags} alt="No Found" />   
            </Link>
        </div>

    
)


}

export default CountryCard