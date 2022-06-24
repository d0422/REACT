import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import "../components/home.css"
function Home(){
  const [loading, setLoading]=useState(true);
  const [movies, setmovies]=useState([]);
  const getMovies=async()=>{
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      );
      const json=await response.json();
      setmovies(json.data.movies);
      setLoading(false);
      console.log(json.data.movies);
  }
  useEffect(()=>getMovies,[]);
  return (
    <div>
      {loading ? (
      <h1>Loading...</h1> 
      ):(
        <div className="main">
          <div>INTRODUCE</div>
          <div className="content">
      {movies.map((movie) => (
          <Movie 
          key={movie.id}
          id={movie.id}
          CoverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}
          rating={movie.rating}
      />
      ))}
      </div>
      </div>
  )} 
  </div>
  );
} 
export default Home;