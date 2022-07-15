import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getActivity } from "../../store/actions"




const ActivityDetails = ({name, difficulty, duration, season}) => {
    
    const touristActivity = useSelector(state => state.touristActivity)
    
    const dispatch = useDispatch()
    
    useEffect(() =>{
        if(touristActivity.length === 0){
            dispatch(getActivity())
        }
    })

    return (

        <div>

            <p>{name}</p>
            <p>{difficulty}</p>
            <p>{duration}</p>
            <p>{season}</p>

        </div>
    )



}


export default ActivityDetails
