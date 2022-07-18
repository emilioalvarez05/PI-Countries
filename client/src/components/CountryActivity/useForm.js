import { useState } from "react";
import { useDispatch } from "react-redux";
import { createActivity, getActivity } from "../../store/actions";
import { useHistory } from "react-router-dom"


const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        const {name, value} = e.target
            setForm({
                ...form,
                [name] : value
            })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    };

    const handleSelect = (e) => {
        let newArray = form.countries
        if (!form.countries.includes(e.target.value)){
            newArray.push(e.target.value)
                if(newArray.length > 5){
                
                    alert("No podes seleccionar mas de 5 paises")
                    newArray.pop()
                } 
        setForm({
            ...form,
            countries: [...newArray]
        })
        }

       
    };

    const handleDelete = (c) => {
        if(form.countries.includes(c)){
            let nuevoArray = form.countries
            nuevoArray = nuevoArray.filter(e => e !== c)
        setForm({
            ...form,
            countries: nuevoArray
        })};
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if (Object.keys(errors).length===0){
            dispatch(createActivity(form))
            alert("Se creo la actividad correctamente")

        
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
        history.push('/home')
        dispatch(getActivity())
        } else {
            e.preventDefault();
            alert ("Errors found on form, please check")
        }
    };

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSelect,
        handleDelete,
        handleSubmit,

    };
};

export default useForm