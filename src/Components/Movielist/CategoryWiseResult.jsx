import React, { useEffect, useState } from 'react'
import Style from "./CategoryWiseResult.module.scss"


const CategoryWiseResult = () => {

  const [userCategories, setUserCategories] = useState([]);
  const [moviesList, setMoviesList] = useState(null);
  
  console.log("moviesList", moviesList);
  useEffect(() => {
    const userSavedCategory = localStorage.getItem('selected');
    if (userSavedCategory) {
      setUserCategories(JSON.parse(userSavedCategory));
    }
  }, []);

    useEffect(() => {
    const fetchData = async () => {
      try{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE4M2NlZDdlZGY2ZWM4MTkyOGVlYmYwN2VmYmI0MSIsInN1YiI6IjY1MmEzMTVhMGNiMzM1MTZmODgyYmJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QYTgPbcp8WA7hvElnW0wq-DgESoY773-kTdyk-1T9dU',
          },
        };
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=80a83ced7edf6ec81928eebf07efbb41`, options);

        const movies = await data.json();
        console.log("data from movie api",movies.results);
        setMoviesList(movies.results);
      }
      catch(error){
        console.log("error while fetching news: ", error);
      }
    }
    fetchData();
  },[])
  console.log("local userCategories",userCategories)
  console.log("moviesList",moviesList);


  const ActionCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Action</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(28))
                .slice(0, 4)  // we shows only 4 movies on display   28 is for action
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const DramaCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Drama</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(18))
                .slice(0, 4) // we shows only 4 movies on display   18 is for drama
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const RomanceCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Romance</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(10749))
                .slice(0, 4) // we shows only 4 movies on display   10749 is for romance
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const ThrillerCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Thriller</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(53))
                .slice(0, 4) // we shows only 4 movies on display   53 is for thriler
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const WesternCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Western</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(37))
                .slice(0, 4) // we shows only 4 movies on display   37 is for western movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const HorrorCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Horror</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(27))
                .slice(0, 4) // we shows only 4 movies on display   27 is for horror
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FantasyCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Fantasy</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(14))
                .slice(0, 4) // we shows only 4 movies on display   14 is for fantasy
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const MusicCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Music</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(10402))
                .slice(0, 4) // we shows only 4 movies on display   10402 is for music
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FictionCategory = () => {
    return (
      <>
        {moviesList ? (
          <div>
            <h1>Fiction</h1>
            <ul>
              {moviesList
                .filter((movie) => movie.genre_ids.includes(878))
                .slice(0, 4)  // we shows only 4 movies on display   878 is for fiction
                .map((movie) => (
                  <div key={movie.id}>
                    <div className={Style.movie_data}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className={Style.movie_img}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };


  return (
    <div className={Style.flex_movie_tiles}>
      {userCategories.map((type, index) =>
        <div key={index}>
          {type === "Action"   && <ActionCategory/>}
          {type === "Drama"    && <DramaCategory/>}
          {type === "Romance"  && <RomanceCategory/> }
          {type === "Thriller" && <ThrillerCategory/> }
          {type === "Western"  && <WesternCategory/>}
          {type === "Horror"   && <HorrorCategory/>}
          {type === "Fantasy"  && <FantasyCategory/>}
          {type === "Music"    && <MusicCategory/>}
          {type === "Fiction"  && <FictionCategory/>}
        </div>)}
    </div>
  );
}

export default CategoryWiseResult