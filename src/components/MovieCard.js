import React from "react";
import "../css/SingleMovie.scss";

export default function MovieCard ({ posterPath }) {
    return (
        <div className="movie-card">
            <img src={posterPath} width='225vw' />
        </div>
    );
}