import './App.css';
import { Route } from "react-router-dom"
import  LandingPage from "./components/LandingPage/LandingPage"
import Home from './components/Home/Home';
import DetailsCountry from './components/DetailsCountry/DetailsCountry';
import NavBar from './components/NavBar/NavBar';
import CountryActivity from './components/CountryActivity/CountryActivity';



function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={NavBar}/>
      <Route path="/home" component={Home}/>
      <Route path="/details/" component={NavBar}/>
      <Route path="/details/:id" component={DetailsCountry}/>
      <Route path="/create" component={NavBar}/>
      <Route path="/create" component={CountryActivity}/>


    </div>
  );
} 

export default App;
