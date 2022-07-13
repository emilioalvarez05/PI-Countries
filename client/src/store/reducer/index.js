import { GET_ALL_COUNTRIES, GET_COUNTRY_ID, ORDER, FILTER } from "../actions";

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
       case FILTER:
        function filterByContinents(countries, searchContinents){
          console.log("Soy countries", countries)
          console.log("Soy search", searchContinents)
            if(searchContinents === "continents"){
              return countries
            } else {
              const filterCountries = countries.filter((c) => c.continents === searchContinents )
              return filterCountries
            }
          }
        const countriesFilterByContinents = filterByContinents(state.allCountries, payload.continentes)
        
        const newOrder = orderFilter(countriesFilterByContinents, state.filter.order)

        return {
          ...state,
          countries: newOrder,
          filter: {
            ...state.filter,
            continentes: payload.searchContinents

          }

        }

        

        default:
            return state;
    }


}