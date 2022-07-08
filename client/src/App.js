import './App.css';
import { Route } from "react-router-dom"
import  LandingPage from "./components/LandingPage/LandingPage"
import Home from './components/Home/Home';
import DetailsCountry from './components/DetailsCountry/DetailsCountry';



function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/details/:id" component={DetailsCountry}/>

    </div>
  );
} 

export default App;
