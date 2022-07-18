import { useState } from "react"
import { useDispatch } from "react-redux"
import { getCountryByName } from "../../store/actions"
import style from "./searchBar.module.css"
import { useHistory } from "react-router-dom"




const SearchBar = () => {

    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
   


    const handleOnChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
       

    } 

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try {
            if(!search){
                alert("Tienes que escribir algo")
            } else {
                dispatch(getCountryByName(search))
                history.push("/home")
                setSearch("")
            
            }
        } catch (error) {
            console.log(error)
        }
      
    }

    return (

        <div>
            <form onSubmit={handleOnSubmit}>
                <input className={style.input} type="text"value={search} placeholder="Introduce un pais" onChange={handleOnChange}></input>
                <input className={style.buscador} type="submit" value="Buscar"></input>
            </form>
        </div>

    )


}

export default SearchBar