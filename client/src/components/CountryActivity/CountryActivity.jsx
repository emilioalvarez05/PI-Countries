import { useState } from "react"


const CountryActivity = () => {


    const [state, setState] = useState({})
    const [errores, setErrores] = useState({
        nombre: "el nombre es necesario"
    })

    console.log(errores)

function validarFormulario(valor){

    let errores = {}

    if(!valor.nombre) errores.nombre = "no hay informacion del nombre"

    if(!valor.dificultad) errores.dificultad = "no hay informacion de la dificultad"

    if(!valor.duracion) errores.duracion = "no hay informacion de la duracion"

    if(!valor.temporada) errores.temporada = "no hay informacion de la temporada"

    return errores
}



function handleInputChange(evento){
    
    setState({
        ...state,
        [evento.target.name]: evento.target.value
    })

    setErrores(validarFormulario({
        ...state,
        [evento.target.name]: evento.target.value
    }))
}

    return (

            <div>

            <form >
                <p>Nombre</p>
                <input onChange={(e)=> handleInputChange(e)} type="text" name="nombre" required></input>
                { errores.nombre ? <span style={ {color:"red"}}> {errores.nombre} </span> : null}
                <p>Dificultad</p>
                <input onChange={(e)=> handleInputChange(e)} type="text" name="dificultad" required></input>
                { errores.dificultad ? <span style={ {color:"red"}}> {errores.dificultad} </span> : null}
                <p>Duracion</p>
                <input onChange={(e)=> handleInputChange(e)} type="text" name="duracion" required></input>
                { errores.duracion ? <span style={ {color:"red"}}> {errores.duracion} </span> : null}
                <p>Temporada</p>
                <input onChange={(e)=> handleInputChange(e)} type="text" name="temporada" required></input>
                { errores.temporada ? <span style={ {color:"red"}}> {errores.temporada} </span> : null}
                <br/>
                <input type="submit" value="Crear Actividad" name="submit" disabled={Object.keys(errores).length === 0 ? false : true} required/>
                
            </form>
               

            </div>



    )
}


export default CountryActivity