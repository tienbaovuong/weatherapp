import { useParams } from "react-router-dom"
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentDate } from './utils/currentDate';
import './css/Cityroute.css'

export default function CityRoute(){
    const navigate = useNavigate()
    //get city data
    let params = useParams();
    const data = useSelector((state) => state.citiesData)
    const weatherType = useSelector((state) => state.weather)
    let mixData = data.vietnam.concat(data.global)
    let cityData
    for(let index in mixData){
        if(mixData[index].city === params.cityname){
            cityData = mixData[index];
            break;
        }
    }

    //get weather data from today onward
    const today = currentDate()
    let indexToFind
    for(let index in cityData.weather){
        if(cityData.weather[index].date === today){
            indexToFind = index
            break;
        }
    }
    const weatherData = cityData.weather.slice(indexToFind)
    const todayData = weatherData[0]
    const followingData = weatherData.slice(1)
    return(
        <div className="citypage">
            <section className="citytitle">
                <h2 className="cityname">{cityData.city}</h2>
                <img src="/image/back.png" className="backbutton" onClick={(e) => {navigate(-1)}}></img>
                <h2>Today's weather</h2>
                <h2><img src={weatherType[todayData.weather]} alt="" className="iconTitle"></img></h2>
                <h2>{todayData.temparature} &deg;C, {todayData.weather}</h2>
            </section>

            <section className="followingdays">
                <div className="row">
                    {followingData && followingData.map(date =>{
                        return(
                            <div className='col-md-4'>
                                <div className='itemDate'>
                                    <p>{date.date}</p>
                                    <p>{date.temparature} &deg;C</p>
                                    <p>{date.weather}</p>
                                    <img src={weatherType[date.weather]} alt="" width = "100px" height="100px"></img>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
        
    );
}