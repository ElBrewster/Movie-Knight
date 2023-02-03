import React from 'react'
import MovieCardsContainer from './MovieCardsContainer'
import movieData from '../apiCalls/mock-data'
import '../css/AllMovies.scss'


class AllMovies extends React.Component {

    state = movieData

    

    render() {
        return (
            <div className='section-all-movies'>
                <section className='heading-all-movies'>
                    <h2>All Movies</h2>
                    <form className='star-filter' id='star-filter'>
                        <select id='filter-movies' name='filter-movies' placeholder='filter by rating'>
                            <option value='one-star'>⭐️</option>
                            <option value='two-star'>⭐️⭐️</option>
                            <option value='three-star'>⭐️⭐️⭐️</option>
                            <option value='four-star'>⭐️⭐️⭐️⭐️</option>
                            <option value='five-star'>⭐️⭐️⭐️⭐️⭐️</option>
                            <option value='six-star'>⭐️⭐️⭐️⭐️⭐️⭐️</option>
                            <option value='seven-star'>⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
                        </select>
                    </form>
                </section>
                <MovieCardsContainer movies={this.state.movies}/>
            </div>        
        )
    }
}

export default AllMovies