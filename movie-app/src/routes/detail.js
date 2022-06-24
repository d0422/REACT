import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    // useParams -> :url 형태로 된 값을 받아올 수 있음
    const [movie, setmovie]=useState([]);
    const {id}=useParams();
    const getMovie=async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setmovie(json.data.movie);
    }
    console.log(movie);
    useEffect(()=>{
        getMovie();
    },[]); 
    return (
        <div>
    <h1>{movie.title}</h1>
    <img src={movie.large_cover_image} alt={movie.title}/>
    </div>);
}
export default Detail;