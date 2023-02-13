import React from 'react'
import PropTypes from "prop-types";
import '../css/MovieCardsContainer.scss'
import MovieCard from './MovieCard';

export default function MovieCardsContainer(props) {
    const movieCards = props.movies.map(movie => {
        function sendMovie() {
            props.selectMovie(movie)
        }

        return (
            <MovieCard 
                selectMovie={ sendMovie }
                posterPath={ movie.poster_path }
                key={ movie.id }
                id={ movie.id }
            />
        )
    })

    return (
        <>
            <section className='movie-card-overview'>
                { movieCards }
            </section>
        </>
    )
}

MovieCardsContainer.propTypes = {
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}