


const CountryCard = ({flags, name, continents}) => {

    return(

        <div>
            <img src={flags} />   
            <h2>Name: {name}</h2>     
            <h3>Continents: {continents}</h3>    
        
        </div>

    
)


}

export default CountryCard