import React, { useEffect, useState } from 'react'
import './postersrow.css'
import axios from '../../constants/axios';
import { imageUrl } from '../../constants/constants';

function Postersrow(props) {
    const [poster, setPoster] = useState([]);
    
    useEffect(() => {
        axios.get(props.url).then((Response)=>{
            console.log(Response.data);
            setPoster(Response.data.results)
            
        })     
    }, []);
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    poster.map((obj)=><img className='poster' src={`${imageUrl+obj.poster_path}`} alt='' />

                    )
                }
        
            </div>

        </div>
    )
}

export default Postersrow