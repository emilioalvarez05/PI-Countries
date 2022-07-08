import { GET_ALL_COUNTRIES, GET_COUNTRY_ID } from "../actions";

const initialState = {
    countries: [],
    allCountries: [], // hace las veces de backup
    filter: {},
    countriesDetail: {},
    touristActivity: []
}

export default function reducer(state = initialState, {type, payload}){
    switch (type) {
        case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
        allCountries: payload

      };
      
        case GET_COUNTRY_ID:
      return {
        ...state,
        countriesDetail: payload
      }
        

        default:
            return state;
    }


}