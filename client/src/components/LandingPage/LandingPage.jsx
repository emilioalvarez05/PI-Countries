import { Link } from "react-router-dom"
import style from "./landingPage.module.css"

const LandingPage = () => {
    return(
        <div className={style.contenedor}>
            <div className={style.divTitulo}>
            <h1 className={style.titulo}>Bienvenido a Henry-Country</h1>
            </div>
            <div className={style.divBoton}>
            
            <Link to={"/home"}>
            <button className={style.boton}>INGRESAR</button>
            </Link>
            </div>
            
        </div>

    )
    
}


export default LandingPage