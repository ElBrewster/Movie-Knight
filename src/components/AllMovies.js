import React from 'react';
import MovieCardsContainer from './MovieCardsContainer';
import Filter from './Filter';
import { getAllMovies } from '../apiCalls/';
import '../css/AllMovies.scss';


export default class AllMovies extends React.Component {
    constructor() {
        super();
        this.state = { movies: [], byRating:'0' };
    };

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

    changeByRating = (rating) => {
        this.setState({ byRating: rating});
    };

    getFilterMovies = () => {
        const filtered = this.state.movies.filter(movie => {
            return movie.average_rating >= this.state.byRating
        })
        return filtered
    };

    render() {
        return (
            <div className='section--all-movies'>
                <Filter changeByRating={this.changeByRating}/>
                {this.state.error && (
                    <h4 className="text--error">
                        Couldn't communicate with the server. Please try again later.
                    </h4>
                )}
                <MovieCardsContainer movies={this.getFilterMovies()}/>
            </div>        
        );
    };
};
