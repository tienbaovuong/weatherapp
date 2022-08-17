import { useParams } from "react-router-dom"
import './css/Cityroute.css'

export default function CityRoute(){
    let params = useParams();
    return(
        <h2>{params.cityname}</h2>
    );
}