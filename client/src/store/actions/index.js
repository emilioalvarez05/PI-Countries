import axios from "axios"

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES" 
export const GET_COUNTRY_ID = "GET_COUNTRY_ID"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const GET_ACTIVITY = "GET_ACTIVITY"

export const getAllCountries = (name) => {
    return function(dispatch) {
         axios.get(`http://localhost:3001/countries/?name=${name? name : ""}`) 
        .then((allCountries) => {
         dispatch({
             type: GET_ALL_COUNTRIES, 
             payload: allCountries.data 
            }); 
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }

export const getCountryById = (id) => {
    return async function(dispatch){
        try {
        let country = await axios.get(`http://localhost:3001/countries/${id}`)
        dispatch({
            type: GET_COUNTRY_ID,
            payload: country.data
        })
        } catch (error) {
            
        }
    }
}

export const filter = (filter) => {
    return {
        type: FILTER,
        payload: filter
    }
}

export const orderCountry = (order) => {
    return {
        type: ORDER, 
        payload: order
    }
} 

export const createActivity = (body) => {
    return async function (dispatch) {        
        try{
        let result = await axios.post('http://localhost:3001/activity', body)               
            dispatch ({
                type: CREATE_ACTIVITY,
                payload: result.data
            })
        }   
        catch(err){
            console.log(err)
        }       

    };
}

export const getActivity = () => {
    return async function (dispatch) {
    try {
        let result = await axios.get('http://localhost:3001/activity')
            dispatch({
                type: GET_ACTIVITY,
                payload: result.data
    })
 } catch (error) {
        console.log(error)
    }
    }
}
