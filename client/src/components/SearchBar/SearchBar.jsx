import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAllCountries } from "../../store/actions"



const SearchBar = () => {

    const [search, setSearch] = useState("")
    const dispatch = useDispatch()


    const handleOnChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        //console.log(search, "soy search")
        //console.log(e.target.value, "soy e.target.value")

    } 

    const handleOnSubmit = (e) => {
        e.preventDefault()
        try {
            if(!search){
                alert("Tienes que escribir algo")
            } else {
                dispatch(getAllCountries(search))
                setSearch("")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text"value={search} placeholder="Introduce un pais" onChange={handleOnChange}></input>
                <input type="submit" value="Buscar"></input>
            </form>
        </div>

    )


}

export default SearchBar