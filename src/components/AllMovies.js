import React from 'react';
import MovieCardsContainer from './MovieCardsContainer';
import '../css/AllMovies.scss';
import { getAllMovies } from '../apiCalls/';


export default class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
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

    render() {
        return (
            <div className='section--all-movies'>
                <section className='heading--all-movies'>
                    <h2>Filter By Rating</h2>
                    {this.state.error && <p>{ this.state.error }</p>}
                    <form className='star-filter' id='star-filter'>
                        <select id='filter-movies' name='filter-movies' placeholder='filter by rating'>
                            <option value='one-star'>⭐️</option>
                            <option value='two-stars'>⭐️⭐️</option>
                            <option value='three-stars'>⭐️⭐️⭐️</option>
                            <option value='four-stars'>⭐️⭐️⭐️⭐️</option>
                            <option value='five-stars'>⭐️⭐️⭐️⭐️⭐️</option>
                            <option value='six-stars'>⭐️⭐️⭐️⭐️⭐️⭐️</option>
                            <option value='seven-stars'>⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
                        </select>
                    </form>
                </section>
                <MovieCardsContainer movies={this.state.movies} selectMovie={this.props.selectMovie}/>
            </div>        
        );
    }
}
