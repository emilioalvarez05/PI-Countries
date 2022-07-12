import { GET_ALL_COUNTRIES, GET_COUNTRY_ID, ORDER } from "../actions";

const initialState = {
    countries: [],
    allCountries: [], // hace las veces de backup
    filter: {order: "order", continentes: "continents", actividades: "activity"},
    countriesDetail: {},
    touristActivity: []
}

function orderFilter(array, payload) {
  const sortedCountries = [...array]
  if(payload === "a-z"){
    sortedCountries.sort((a, b) => {
      if(a.name > b.name){
        return 1
      }
      if(a.name < b.name){
        return -1
      } 
      return 0
    })
  }
  if(payload === "z-a"){
    sortedCountries.sort((a, b) => {
      if(a.name < b.name) {
        return 1
      }
      if(a.name > b.name){
        return -1
      }
      return 0
    })
  }
  if(payload === "mayorPoblacion"){
    sortedCountries.sort((a, b) => {
      return b.population - a.population 
    })
  }
  if(payload === "menorPoblacion"){
    sortedCountries.sort((a, b) => {
      return a.population - b.population 
    })
  }

  return sortedCountries
}

export default function reducer(state = initialState, {type, payload}){
    switch (type) {
        case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
        filter: {order: "order", continentes: "continents", actividades: "activity"}

      };
      
        case GET_COUNTRY_ID:
      return {
        ...state,
        countriesDetail: payload
      }
       case ORDER:
        const orderCountries = orderFilter(state.countries, payload)
        return {
        ...state,
        countries: orderCountries,
        filter: {
          ...state.filter,
          order: payload,

        }

        }
        

        default:
            return state;
    }


}