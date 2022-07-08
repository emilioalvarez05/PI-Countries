import axios from "axios"


export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES" 
export const GET_COUNTRY_ID = "GET_COUNTRY_ID"

export const getAllCountries = () => {
    return function(dispatch) {
         axios.get("http://localhost:3001/countries")
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