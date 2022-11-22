import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY,IMG_URL } from '../../Constants/Constants'
import axios from '../../axios'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            let index = Math.floor((Math.random() * 19) + 1)
            console.log(response.data.results[index]);
            setMovie(response.data.results[index])
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? IMG_URL+movie.backdrop_path : "" } )`}}
        className='banner'>
            <div className="content">
                <h1 className="title">{movie ? movie.title  : "" } </h1>
                    <div className="banner_button">
                        <button className="button">Play</button>
                        <button className="button">My list</button>
                    </div>
                    <p className="description">
                      {movie ? movie.overview : ""}
                    </p>
            </div>
           
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner