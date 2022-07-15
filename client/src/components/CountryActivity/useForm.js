import { useState } from "react";
import { useDispatch } from "react-redux";
import { createActivity } from "../../store/actions";


const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()


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
        setForm({
            ...form,
            countries: [...newArray]
        })
        }
        console.log("soy form.country", form.countries)
    };

    const handleSubmit = (e) => {
        if(!form.name){
            e.preventDefault();
            return alert('Name is required!')
        }
        setErrors(validateForm(form));
        if (Object.keys(errors).length===0){
            alert("Sending info. Returining to home.")
            dispatch(createActivity(form))


        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
        // history.push('/home')
        // dispatch(getActivities())
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
        handleSubmit,

    };
};

export default useForm