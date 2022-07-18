import style from "./navBar.module.css"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import { useDispatch } from "react-redux"
import { getAllCountries } from "../../store/actions"


const NavBar = () => {

    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(getAllCountries())
    }

    return (
        
        <div className={style.contenedor}>

            <Link onClick={handleOnClick} className={style.list} to="/home">Home</Link>
            <SearchBar/>
            <Link className={style.listitem} to="/create">Crear Actividad</Link>

            
        </div>
    


    )
}

export default NavBar