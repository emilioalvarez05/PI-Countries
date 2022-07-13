import { useState } from "react"


const CountryActivity = () => {


    const [state, setState] = useState({})
    const [errores, setErrores] = useState({
        nombre: "el nombre es necesario"
    })

    

function validarFormulario(valor){

    let errores = {}

    if(!valor.nombre){
         errores.nombre = "Tienes que elegir un nombre para tu actividad"
    } else if (valor.nombre.length > 20){
        errores.nombre = "La actividad no puede tener mas 20 caracteres"
    }
    if(!valor.dificultad){
         errores.dificultad = "Tienes que agregar a una dificultad a tu actividad"
    } else if (valor.dificultad < 1 || valor.dificultad > 5){
        errores.dificultad = "La dificultad debe ser entre 1 y 5"
    }
    if(!valor.duracion) {
        errores.duracion = "no hay informacion de la duracion"
    } 
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
                <input onChange={(e)=> handleInputChange(e)} type="number" name="dificultad" required></input>
                { errores.dificultad ? <span style={ {color:"red"}}> {errores.dificultad} </span> : null}
                <p>Duracion</p>
                <select onChange={(e)=> handleInputChange(e)} type="text" name="duracion" required>
                    <option>Tiempo aproximado</option>
                    <option>30 min</option>
                    <option>60 min</option>
                    <option>90 min</option>
                    <option>120 min</option>
                    <option>Mas de 2 horas</option>
                </select>
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