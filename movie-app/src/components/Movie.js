import "./Movie.css";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
function Movie({id,CoverImg,title,summary,genres,rating}){
    const [ishover, sethover]=useState(0);
    return (
        <div className="object"
        onMouseOver={()=>sethover(1)}
        onMouseOut={()=>sethover(0)}>
        <Link to={`/movie/${id}`}><img src={CoverImg} 
        alt={title}
        /></Link>
        {ishover ? (
            <div className="inner">{title}<br></br><br></br>Rating :{rating}
            </div>
        ):("")}
    </div>
    );
}
export default Movie;