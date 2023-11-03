import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../constants/axios'
import { API_KEY } from '../../constants/constants';
import { imageUrl } from '../../constants/constants';

function Banner() {
    const [film, setFilm] = useState([]);
    
    useEffect(() => {
      axios.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then((Response)=>{
        setFilm(Response.data.results[Math.floor(Math.random()*21)])
      })
    }, []);
    
  return (
    <div style={{backgroundImage: `url(${film ? imageUrl+film.backdrop_path : ""})`}} className='banner'>
        <div className='banner-content'>
            <div className='banner-title-content'>
                <img className='banner-title-logo' src="./assets/banner-logo.png" alt=""/>
                <h4 className='banner-title'>SERIES</h4>
            </div>
            <div className='banner-heading-content'>
                <h1 className='banner-heading'>{film ? film.title : ""}</h1>
                <h4 className='banner-description'>{film ? film.overview : ""}</h4>

            </div>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>More info</button>

            </div>
        </div>
        <div className='fade-bottom'></div>

    </div>
  )
}

export default Banner