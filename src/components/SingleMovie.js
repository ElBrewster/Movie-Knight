import "../css/SingleMovie.scss";
import React from "react";
import { getAllMovies } from "../apiCalls";
import { getSelectedMovie } from "../apiCalls";

export default class SingleMovie extends React.Component {
    constructor(props){
        super(props);
        this.state = { movie: null };
    }

    returnToMainPaige = () => {
        this.props.resetState();
    };

    fetchSelectedMovie = async () => {
        try {
            const item = await getSelectedMovie(this.props.movie.id);
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
        return (
            this.state.movie ? (
            <div className="single-page-container">
                <img src={this.state.movie.poster_path} alt="movie poster image" />
                <div className="single-movie-description">
                    <h2>
                        {this.state.movie.title}(
                        {this.state.movie["release_date"].slice(0, 4)})
                    </h2>
                    <p>{this.state.movie["average_rating"].toFixed(1)}</p>
                    <p>⭐️ {this.state.movie.overview }</p>
                    <p>Genres: {this.state.movie.genres.join(", ")}</p>
                    <button onClick={this.returnToMainPaige}>back</button>
                </div>
            </div>

            ) : <h4 className="error-message">{this.state.error}</h4>
        );
    }
}