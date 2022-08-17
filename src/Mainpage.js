import { TextField, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/Mainpage.css';
import{initiateVNCity, removeVNCity} from './store/reducer/vietnamslice.js';
import{initiateGlobalCity, removeGlobalCity} from './store/reducer/globalslice.js';
import { currentDate } from './utils/currentDate';
export default function MainPage(props) {
    const data = useSelector((state) => state.citiesData)
    const weatherType = useSelector((state) => state.weather)
    const recordDataVN = useSelector((state) => state.vietnam)
    const recordDataGlobal = useSelector((state) => state.global)
    const isVN = (props.type === "vn")
    console.log(isVN)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //current location data setup
    const hanoiData = data.vietnam[0]
    const date = currentDate()
    let todayData
    for(let d in hanoiData.weather){
        if(hanoiData.weather[d].date === date){
            todayData = hanoiData.weather[d]
            break
        }
    }
    
    //default city data setup
    let cityData
    if(isVN && recordDataVN.length === 0){
        if(data.vietnam.length !== 0){
            cityData = data.vietnam
            cityData = cityData.slice(0, 6)
            dispatch(initiateVNCity(cityData))
        }
    }
    else if(!isVN && recordDataGlobal.length === 0){
        if(data.global.length !==0){
            cityData = data.global
            cityData = cityData.slice(0, 6)
            dispatch(initiateGlobalCity(cityData))
        }
    }
    let searchDetail
    const handleChange = (props) => {
        searchDetail = props
    }
    const handleQuery = () => {

    }


    return(
        <div className='mainpage'>
            <section className='currentLocation'>
                <h2>Current location: {hanoiData.city} , {hanoiData.country}</h2>
                <h2>{todayData.temparature} &deg;C, {todayData.weather}</h2>
            </section>

            <section className='searchbox'>
                <TextField id="standard-basic" 
                            placeholder="Search for a city" 
                            variant="standard" 
                            inputProps={{ 
                                style: { 
                                    color: "white", 
                                    fontSize: "30px",
                                    margin: "10px"} 
                            }}
                            onChange = {e => handleChange(e.target.value)}
                            value = {searchDetail}/>
                <Button variant="contained"
                        size="large"
                        onClick={handleQuery()}
                        style={{
                            backgroundColor: "#E6104c",
                            fontSize: "18px",
                            color: "white",
                            margin: "10px",
                        }}>
                            Submit</Button>
            </section>

            <section className='itemList'>
            {isVN?<div className='row'>
                {recordDataVN && recordDataVN.slice().reverse().map(city =>{
                    let temp
                    for(let d in city.weather){
                        if(city.weather[d].date === date){
                            temp = city.weather[d]
                            break
                        }
                    }
                    return(
                        <div className='col-md-4'>
                            <div className='item' onClick={() => navigate(`/${city.city}`)}>
                                <p>{temp.temparature} &deg;C</p>
                                <p>{temp.weather}</p>
                                <img src={weatherType[temp.weather]} alt="" width = "100px" height="100px"></img>
                            </div>
                        </div>
                    )
                })}
                </div>
                :<div className='row'>
                {recordDataGlobal && recordDataGlobal.slice().reverse().map(city =>{
                    let temp
                    for(let d in city.weather){
                        if(city.weather[d].date === date){
                            temp = city.weather[d]
                            break
                        }
                    }
                    return(
                        <div className='col-md-4'>
                            <div className='item' onClick={() => navigate(`/${city.city}`)}>
                                <p>{temp.temparature} &deg;C</p>
                                <p>{temp.weather}</p>
                                <img src={weatherType[temp.weather]} alt="" width = "100px" height="100px"></img>
                            </div>
                        </div>
                    )
                })}
                </div>}
            </section>
        </div>
    );
}