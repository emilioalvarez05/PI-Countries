import style from "./navBar.module.css"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"


const NavBar = () => {

    return (

        <div className={style.contenedor}>

            <Link className={style.home} to="/home">Home</Link>
            <Link to="/create">Create</Link>
            <SearchBar/>

            


        </div>



    )
}

export default NavBar