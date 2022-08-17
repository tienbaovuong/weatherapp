import './css/App.css';
import CityRoute from "./Cityroute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './Mainpage';

function App() {
  return (
    <div className="RootApp">
      <div className='container'>
        <h1 className='title'><a href='/'>Simple Weather App</a></h1>
        <Router>
          <Routes>
            <Route path="/vietnam-cities"
              element = {<MainPage type = 'vn'/>}>
            </Route>
            <Route path="/global-cities"
              element = {<MainPage type = 'global'/>}>
            </Route>
            <Route path='/'
              element = {<DefaultRoute/>}>
            </Route>
            <Route path = {`:cityname`}
              element = {<CityRoute/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}
function DefaultRoute(){
  window.location.href = "/vietnam-cities" 
}

export default App;
