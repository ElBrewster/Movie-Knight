import React from 'react'
import '../css/MovieCardsContainer.scss'
import MovieCard from './MovieCard';

export default function MovieCardsContainer(props) {
    const movieCards = props.movies.map(movie => {
        return (
            <MovieCard 
                selectMovie={() => props.selectMovie(movie)}
                posterPath={movie.poster_path}
                key={movie.id}
            />
        )
    })
    return (
        <>
            <section className='movie-card-overview'>
                {movieCards}
            </section>
        </>
    )
}
