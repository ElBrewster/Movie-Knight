import "../css/SingleMovie.scss";
import React from "react";
import { getSelectedMovie } from "../apiCalls";
import { Link } from "react-router-dom";

export default class SingleMovie extends React.Component {
    constructor(props){
        super(props);
        this.state = { movie: null };
    }

    fetchSelectedMovie = async () => {
        try {
            const item = await getSelectedMovie(this.props.match.params.id);
            this.setState({movie: item.movie});
        }
        catch (error) {
            this.setState({error: error.message});
        }
    };

    componentDidMount() {
        this.fetchSelectedMovie();
    };

    render() {
        const {
            poster_path,
            backdrop_path,
            title,
            release_date,
            average_rating,
            overview,
            genres
        } = this.state.movie || {};
        return this.state.movie ? (
            <div className="single-page-container" style={{backgroundImage: `url(${backdrop_path})`}}>
                <img className="image" src={poster_path} alt="movie poster image" ></img>
                <div className="single-movie-description">
                    <h2>
                        {title}({release_date.slice(0, 4)})
                    </h2>
                    <p>⭐️ {average_rating.toFixed(1)}</p>
                    <p>{overview}</p>
                    <p>Genres: {genres.join(", ")}</p>
                    <Link className='back-button' to="/">
                        Back
                    </Link>
                </div>
            </div>
            ) : (
            <div className="error-message-single">
                <h4 className="error-message">Couldn't communicate with the server. Please try again later.</h4>
                <Link className='back-button' to='/'>
                    Back
                </Link>
            </div>
            );
    }
}