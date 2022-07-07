import axios from "axios"


export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES" 

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