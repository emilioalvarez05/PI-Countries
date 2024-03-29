import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../store/actions";
import useForm  from "./useForm";
import style from "./countryActivity.module.css"


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
             if (!/^[a-zA-Z& áéíóú]+$/.test(form.name)){
                   errors.name = "No puedes incluir números o caracteres especiales en tu actividad"
            }
            
            if(!form.difficulty){
                errors.difficulty = "Debes determinar el nivel de dificultad"
            }
        
            if(!form.duration) {
                errors.duration = "No hay informacion de la duracion"
            } 
            if(!form.season) {errors.season = "No hay informacion de la temporada"}
        
            return errors
        }



const CountryActivity = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)

    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSelect,
        handleDelete,
        handleSubmit

    } = useForm(initialForm, validarFormulario)

    useEffect(() => {
        if(countries.length === 0){
            dispatch(getAllCountries())
        }
    },[dispatch,countries.length])

    return (

        <div className={style.divMay}>

            <div className={style.contenedor}>
            <h3 className={style.titulo}>CREA TU NUEVA ACTIVIDAD</h3>

            <form onSubmit={handleSubmit} className={style.formulario} >

                <div className={style.input}>
                <p className={style.input}><strong>Tu actividad</strong></p>
                <input className={style.input1} onChange={handleChange} value={form.name} onBlur={handleBlur} type="text" name="name" required></input>
                </div>
                { errors.name && <p style={ {color:"red"}}> {errors.name} </p>}

                <div className={style.input}>
                <p><strong>Dificultad</strong></p>
                <select className={style.input2}  onChange={handleChange} onBlur={handleBlur} type="text"name="difficulty" required>
                <option  value="Nivel de dificultad">Nivel de dificultad</option>
                    <option value="1">1 - Muy facil</option>
                    <option value="2">2 - Facil</option>
                    <option value="3">3 - Medio</option>
                    <option value="4">4 - Dificil</option>
                    <option value="5">5 - Extrema</option>
                </select>
                </div>
                { errors.difficulty && <p style={ {color:"red"}}>{errors.difficulty}</p>}

                <div className={style.input}>
                <p><strong>Duracion</strong></p>
                <select className={style.input2} onChange={handleChange} onBlur={handleBlur} type="text" name="duration" required>
                    <option value="Tiempo aproximado">Tiempo aproximado</option>
                    <option value="30">30 min</option>
                    <option value="60">60 min</option>
                    <option value="90">90 min</option>
                    <option value="120">120 min</option>
                    <option value="2">Mas de 2 horas</option>
                </select>
                </div>
                { errors.duration && <p style={ {color:"red"}}>{errors.duration}</p>}

                <div className={style.input}>
                <p><strong>Temporada</strong></p>
                <select className={style.input2} onChange={handleChange} onBlur={handleBlur} type="text" name="season" required>
                    <option value="Temporada">Temporada</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                </select>
                </div>
                { errors.season && <p style={ {color:"red"}}>{errors.season}</p>}

                <div className={style.input}>
                    <label><strong>Paises donde se realiza la actividad</strong></label>
                    <select className={style.input2} onChange={(e) => handleSelect(e)}>
                        <option>Paises</option>
                        {countries?.map(c => {
                            return (
                                <option key={c.id} onBlur={handleBlur}>{c.name}</option>
                            )
                        } )}
                    </select>
                </div>

                <br/>
                <br/>

                <input onSubmit={handleSubmit} className={style.Btn} type="submit" value="Crear Actividad" name="submit" disabled={Object.keys(errors).length === 0 ? false : true} required/>
                
            </form>

                <div>
                    {form.countries?.map((c) => <ul key={c.name} className={style.lista}><li>{c} <button className={style.CBut} onClick={() => handleDelete(c)}>X</button></li></ul>)}

                    
                
                

                </div>
               

            </div>
            
        </div>

    )
}


export default CountryActivity