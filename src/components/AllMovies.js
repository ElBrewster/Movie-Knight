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
                        <div className="star-rating" onChange={this.handleFilterByRating}>
                            <input type="radio" id="10-stars" name="rating" value="10" />
                            <label htmlFor="10-stars" className="star">&#9733;</label>
                            <input type="radio" id="9-stars" name="rating" value="9" />
                            <label htmlFor="9-stars" className="star">&#9733;</label>
                            <input type="radio" id="8-stars" name="rating" value="8" />
                            <label htmlFor="8-stars" className="star">&#9733;</label>
                            <input type="radio" id="7-stars" name="rating" value="7" />
                            <label htmlFor="7-stars" className="star">&#9733;</label>
                            <input type="radio" id="6-star" name="rating" value="6" />
                            <label htmlFor="6-star" className="star">&#9733;</label>
                            <input type="radio" id="5-stars" name="rating" value="5" />
                            <label htmlFor="5-stars" className="star">&#9733;</label>
                            <input type="radio" id="4-stars" name="rating" value="4" />
                            <label htmlFor="4-stars" className="star">&#9733;</label>
                            <input type="radio" id="3-stars" name="rating" value="3" />
                            <label htmlFor="3-stars" className="star">&#9733;</label>
                            <input type="radio" id="2-stars" name="rating" value="2" />
                            <label htmlFor="2-stars" className="star">&#9733;</label>
                            <input type="radio" id="1-star" name="rating" value="1" />
                            <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
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
