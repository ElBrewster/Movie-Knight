import React from "react";
import "../css/SingleMovie.scss";

export default function MovieCard ({ posterPath, selectMovie }) {
    const handleClick = (event) => {
        selectMovie();
    }

    return (
        <div className="movie-card" onClick={handleClick}>
            <img src={posterPath} width='225vw' />
        </div>
    );
}