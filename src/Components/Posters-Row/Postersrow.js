import React, { useEffect, useState } from 'react'
import './postersrow.css'
import axios from '../../constants/axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import ReactPlayer from 'react-player/youtube';

function Postersrow(props) {
    const [poster, setPoster] = useState([]);
    const [urlId, setUrlId] = useState('');
    
    
    useEffect(() => {
        axios.get(props.url).then((Response)=>{
            setPoster(Response.data.results)
            
        })     
    }, []);

    const handleMouseClick=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            setUrlId(Response.data.results[0].key)
            
        })
        
    }

    const link=`https://www.youtube.com/watch?v=${urlId}`

    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    poster.map((obj)=><img onClick={()=>handleMouseClick(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>

                    )
                }
        
            </div>
            {urlId ? <ReactPlayer urlId={link} width='100%' height='35vh' controls={true}/> : ""}
        </div>
    )
}

export default Postersrow