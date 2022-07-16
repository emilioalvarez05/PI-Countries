import { useDispatch, useSelector } from "react-redux"
import { filter, orderCountry } from "../../store/actions"



const Filter = () => {

    const {order, continentes, actividades} = useSelector(state => state.filter)
    const touristActivity = useSelector(state => state.touristActivity)
    //console.log(touristActivity)
    const dispatch = useDispatch()

    function onOrderChange (e) {
        e.preventDefault()
        dispatch(orderCountry(e.target.value))
    }

    function onFilterChange (e) {
        e.preventDefault()
        if(e.target.name === "selectContinents"){
            console.log("entre a SelectContinents", {
                order: order,
                continentes: e.target.value,
                actividades: actividades
            })
            dispatch(filter({
                order: order,
                continentes: e.target.value,
                actividades: actividades
            }))
        }
        if(e.target.name === "selectActivity"){
            console.log("entre a selectActivity", {
                order: order,
                continentes: continentes,
                actividades: e.target.value
            } )
            dispatch(filter({
                order: order,
                continentes: continentes,
                actividades: e.target.value
            }))
        } 
        
    }


    return(

        <div>

        <select value={order} onChange={onOrderChange}>
            <option value="order" >Ordenar por</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
            <option value="mayorPoblacion">Mayor Poblacion</option>
            <option value="menorPoblacion">Menor Poblacion</option>
        </select>

        <select name="selectContinents" value={continentes} onChange={onFilterChange}>
            <option value="continents">Continentes</option>
            <option value="North America">Norte America</option>
            <option value="South America">Sudamerica</option>
            <option value="Europe">Europa</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antartida</option>
        </select>

        <select name="selectActivity" value={actividades} onChange={onFilterChange}>
            <option value="activity">Actividades</option>
            {touristActivity && touristActivity.map((act) => {
                return (
                    <option key={act.id} value={act.id}>{act.name}</option>
                )
            })}
        </select>

        </div>
    )
}


export default Filter