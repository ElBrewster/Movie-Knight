import React from "react";
import "../css/SingleMovie.scss";
import {Link} from "react-router-dom";

export default function MovieCard ({ posterPath, id }) {


    return (
        <div className="movie-card">
            <img src={ posterPath } width='225vw' />
            <Link to={"/movies/" + id} >See More</Link>
        </div>
    );
}