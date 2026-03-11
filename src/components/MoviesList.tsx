/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./MoviesList.css";
import HeaderComp from "./HeaderComp";
import Loader from "./Loader";

const MoviesList = () => {
  const [load, setLoad] = useState(true);
  const [movies, setMovies] = useState<any[]>([]);
  const { text } = useParams();
  const navigate = useNavigate();

  const apikey = '5d0cd3b4';

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!text) return;
      
      setLoad(true);
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${text}`);
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("API Error:", error);
        setMovies([]);
      } finally {
        setLoad(false);
      }
    };

    fetchMovies();
  }, [text]);

  const converted = text?.toUpperCase();

  return (
    <>
      <HeaderComp />
      <div className="movie_container">
        {load ? (
          <div className="loader_elite_wrap">
            <Loader />
          </div>
        ) : (
          <div className="sub_con">
            {text && movies.length > 0 ? (
              <>
                <div className="sub_cont_head">
                  <h1>{converted} <span>COLLECTION</span></h1>
                </div>
                <div className="movie-list">
                  <div className="movie_lists">
                    {movies.map((ele: any) => (
                      <NavLink key={ele.imdbID} to={"/movies"} state={ele} style={{ textDecoration: 'none' }}>
                        <div className="img_title">
                          <div className="movie_meta_overlay">
                            <span className="meta_badge">{ele.Year}</span>
                            <span className="meta_badge type_badge">{ele.Type.toUpperCase()}</span>
                          </div>
                          <div className="movie_img">
                            <img 
                              src={ele.Poster !== "N/A" ? ele.Poster : "https://via.placeholder.com/400x600?text=No+Poster"} 
                              alt={ele.Title} 
                            />
                          </div>
                          <div className="movie_title">{ele.Title}</div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="error">
                {text ? "No Results Found" : "Please Enter Valid Search"}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;