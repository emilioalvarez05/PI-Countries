import { GET_ALL_COUNTRIES } from "../actions";

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
        

        default:
            return state;
    }


}