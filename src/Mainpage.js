import { TextField, Button} from '@material-ui/core';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './css/Mainpage.css';
import{initiateVNCity, removeVNCity, addVNCity} from './store/reducer/vietnamslice.js';
import{initiateGlobalCity, removeGlobalCity, addGlobalCity} from './store/reducer/globalslice.js';
import { currentDate } from './utils/currentDate';
export default function MainPage(props) {
    const [alignment, setAlignment] = useState(props.type);
    const handleChangeType = (props)=> {
        setAlignment(props);
        if(isVN && props === "global"){
            navigate("/global-cities")
        }
        else if(!isVN && props === "vn"){
            navigate("/vietnam-cities")
        }
    };
    const data = useSelector((state) => state.citiesData)
    const weatherType = useSelector((state) => state.weather)
    const recordDataVN = useSelector((state) => state.vietnam)
    const recordDataGlobal = useSelector((state) => state.global)
    const isVN = (props.type === "vn")
    let clickRemove = false
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
    const handleQuery = (e) => {
        let queryResult = []
        if(typeof searchDetail === 'undefined') searchDetail = ""
        if(isVN){
            for(let searchdata in data.vietnam){
                if(data.vietnam[searchdata].city.toLowerCase().startsWith(searchDetail.toLowerCase())){
                    queryResult = queryResult.concat(data.vietnam[searchdata])
                }
            }
        }
        else{
            for(let searchdata in data.global){
                if(data.global[searchdata].city.toLowerCase().startsWith(searchDetail.toLowerCase())){
                    queryResult = queryResult.concat(data.global[searchdata])
                }
            } 
        }
        if(queryResult.length !== 0){
            if(isVN){
                dispatch(addVNCity(queryResult))
            }
            else{
                dispatch(addGlobalCity(queryResult))
            }
        }
    }
    const handleRemove = (e) =>{
        if(isVN){
            dispatch(removeVNCity(e.target.getAttribute('data-arg')));
        }
        else{
            dispatch(removeGlobalCity(e.target.getAttribute('data-arg')));
        }
        e.stopPropagation();
    }

    return(
        <div className='mainpage'>
            <section className='currentLocation'>
                <h2>Current location: {hanoiData.city} , {hanoiData.country}</h2>
                <h2><img src={weatherType[todayData.weather]} alt=""></img></h2>
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
                        onClick={e => handleQuery(e)}
                        style={{
                            backgroundColor: "#E6104c",
                            fontSize: "18px",
                            color: "#ffffff",
                            margin: "10px",
                        }}>
                            Submit</Button>
                <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={e => handleChangeType(e.target.value)}
                        style={{
                            backgroundColor: "#E6104c",
                            fontSize: "18px",
                            margin: "10px",
                        }}
                        >
                        <ToggleButton value="vn"
                                    style={{
                                        color: "#ffffff",
                        }}>VN</ToggleButton>
                        <ToggleButton value="global"
                                    style={{
                                        color: "#ffffff",
                        }}>Global</ToggleButton>
                </ToggleButtonGroup>
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
                                <p>{city.city}</p>
                                <img src = "/image/remove.jpg" className="removeButton" onClick={(e) => handleRemove(e)} data-arg = {city.city}></img>
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
                            <div className='item'>
                                <p className='city'>{city.city}</p>
                                <img src = "/image/remove.jpg" className="removeButton" onClick={(e) => handleRemove(e)} data-arg={city.city}></img>
                                <p className='temparature'>{temp.temparature} &deg;C</p>
                                <p className='weather'>{temp.weather}</p>
                                <img className='icon' src={weatherType[temp.weather]} alt="" width = "100px" height="100px" onClick={() => {if(!clickRemove) navigate(`/${city.city}`)}}></img>
                            </div>
                        </div>
                    )
                })}
                </div>}
            </section>
        </div>
    );
}