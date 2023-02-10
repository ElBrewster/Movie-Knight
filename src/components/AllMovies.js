import React from 'react';
import MovieCardsContainer from './MovieCardsContainer';
import '../css/AllMovies.scss';
import { getAllMovies } from '../apiCalls/';


export default class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], byRating:'0' };
    }

    componentDidMount() {
        this.fetchAllMovies();
    };

    fetchAllMovies = async () => {
        try {
            const items = await getAllMovies();
            this.setState(items);
        }
        catch (error) { 
            this.setState({ error: error.message }); 
        } 
    };

    handleFilterByRating = (event) => {
        this.setState({ byRating: event.target.value})
    };

    getFilterMovies = () => {
        const filtered = this.state.movies.filter(movie => {
            return movie.average_rating >= this.state.byRating
        })
        return filtered
    }

    render() {
        return (
            <div className='section--all-movies'>
                <section className='heading--all-movies'>
                    <h2>Filter By Rating</h2>
                    <form className='star-filter' id='star-filter'>
                        <select 
                        onChange={this.handleFilterByRating}
                        id='filter-movies' 
                        name='filter-movies' 
                        placeholder='filter by rating'
                        >
                            <option value='0'>Rating</option>
                            <option value='1'>⭐️</option>
                            <option value='2'>⭐️⭐️</option>
                            <option value='3'>⭐️⭐️⭐️</option>
                            <option value='4'>⭐️⭐️⭐️⭐️</option>
                            <option value='5'>⭐️⭐️⭐️⭐️⭐️</option>
                            <option value='6'>⭐️⭐️⭐️⭐️⭐️⭐️</option>
                            <option value='7'>⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
                        </select>
                    </form>
                </section>
                {this.state.error && (
                    <h4 className="text--error">
                        Couldn't communicate with the server. Please try again later.
                    </h4>
                )}
                <MovieCardsContainer movies={this.getFilterMovies()} selectMovie={this.props.selectMovie}/>
            </div>        
        );
    }
}
