import React from "react";
import "../css/SingleMovie.scss";
import {Link} from "react-router-dom";

export default function MovieCard ({ posterPath, id }) {


    return (
        <div className="movie-card">
            <Link to={"/movies/" + id} >
                <img className="frontPage" src={ posterPath } width='220vw' ></img>     
            </Link>
        </div>
    );
}