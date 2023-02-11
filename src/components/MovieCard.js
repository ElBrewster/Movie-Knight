import React from "react";
import "../css/SingleMovie.scss";
import {Link} from "react-router-dom";

export default function MovieCard ({ posterPath, id, title }) {


    return (
        <div className="movie-card">
            <Link to={"/movies/" + id} >
                <img className="frontPage" src={ posterPath } alt={`Poster of the movie ${title}`} width='220vw' ></img>     
            </Link>
        </div>
    );
}