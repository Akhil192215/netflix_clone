import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import { IMG_URL, API_KEY } from '../../Constants/Constants'
import axios from '../../axios'



function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState()

    const movieClickHandler = (id) => {
        axios(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length !==0){
                setUrlId(response.data.results[0])
            }
        })
    }

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovie(response.data.results)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
    return (
        <div className='row' >
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj) =>
                    <img onClick={() => movieClickHandler(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${IMG_URL + obj.backdrop_path}`} alt="" />
                )}
            </div>
           { urlId && <YouTube  opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPost