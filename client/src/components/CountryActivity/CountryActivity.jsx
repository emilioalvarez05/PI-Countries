import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../store/actions";
import useForm  from "./useForm";


        const initialForm = {
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        }

        function validarFormulario(form){
        
            let errors = {}
        
            if(!form.name){
                errors.name = "Tienes que elegir un nombre para tu actividad"
            } if (form.name.length > 20){
                errors.name = "La actividad no puede tener mas 20 caracteres"
            }    
            //  if (!/^[a-zA-Z& áéíóú]+$/.test(form.name)){
            //        errors.name = "No puedes incluir números o caracteres especiales en tu actividad"
            // }
            
            if(!form.difficulty){
                errors.difficulty = "Debes determinar el nivel de dificultad"
            }
        
            if(!form.duration) {
                errors.duration = "No hay informacion de la duracion"
            } 
            if(!form.season) errors.season = "No hay informacion de la temporada"
        
            return errors
        }





    // const countries = useSelector(state => state.countries)

    // const dispatch = useDispatch()

    // const [state, setState] = useState({})
    // const [form, setForm] = useState({
    //     nombre: "",
    //     dificultad: "",
    //     duracion: "",
    //     temporada: "",
    //     countries: []
    // })
    // const [errores, setErrores] = useState({
    //     nombre: "",
    //     dificultad: "",
    //     duracion: "",
    //     temporada: "",
    //     countries: []
    // })

    // useEffect(() => {
    //    if(countries.length === 0){
    //     dispatch(getAllCountries())
    //    } 
    // })

   
    


const CountryActivity = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)

    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSelect,
        handleClose,
        handleSubmit

    } = useForm(initialForm, validarFormulario)

    useEffect(() => {
        if(countries.length === 0){
            dispatch(getAllCountries())
        }
    },[dispatch,countries.length])

    return (

            <div>

            <form onSubmit={handleSubmit}>

                <p>Tu actividad</p>
                { errors.name && <p style={ {color:"red"}}> {errors.name} </p>}
                <input onChange={handleChange} value={form.name} onBlur={handleBlur} type="text" name="name" required></input>

                <p>Dificultad</p>
                { errors.difficulty && <p style={ {color:"red"}}>{errors.difficulty}</p>}
                <select onChange={handleChange} onBlur={handleBlur} type="text"name="difficulty" required>
                <option value="Nivel de dificultad">Nivel de dificultad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                
                <p>Duracion</p>
                { errors.duration && <p style={ {color:"red"}}>{errors.duration}</p>}
                <select onChange={handleChange} onBlur={handleBlur} type="text" name="duration" required>
                    <option value="Tiempo aproximado">Tiempo aproximado</option>
                    <option value="30">30 min</option>
                    <option value="60">60 min</option>
                    <option value="90">90 min</option>
                    <option value="120">120 min</option>
                    <option value="2">Mas de 2 horas</option>
                </select>

                <p>Temporada</p>
                { errors.season && <p style={ {color:"red"}}>{errors.season}</p>}
                <select onChange={handleChange} onBlur={handleBlur} type="text" name="season" required>
                    <option value="Temporada">Temporada</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                </select>
                <div>
                    <label>Paises donde se realiza la actividad</label>
                    <select onChange={(e) => handleSelect(e)}>
                        <option>Paises</option>
                        {countries?.map(c => {
                            return (
                                <option onBlur={handleBlur}>{c.name}</option>
                            )
                        } )}
                    </select>
                </div>

                <br/>
                <br/>

                <input onSubmit={handleSubmit} type="submit" value="Crear Actividad" name="submit" disabled={Object.keys(errors).length === 0 ? false : true} required/>
                
            </form>

                <div>
                    {form.countries?.map((c) => <ul key={c.name}><li>{c} <button onClick={handleClose}>X</button></li></ul>)}

                    
                
                

                </div>
               

            </div>



    )
}


export default CountryActivity