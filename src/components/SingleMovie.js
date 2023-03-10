import "../css/SingleMovie.scss";
import React from "react";
import { getSelectedMovie } from "../apiCalls";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsStar } from "react-icons/bs";
import PropTypes from "prop-types";

export default class SingleMovie extends React.Component {
    constructor(){
        super();
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
            <div className="column-container" style={{backgroundImage: `linear-gradient(to bottom, transparent, 30%, black), url(${backdrop_path})`}}>
                <section className="empty-top-space"></section>
                <div className="single-page-container">
                    <img className="poster" src={poster_path} alt={title}></img>
                    <div className="single-movie-description">
                        <h2>
                            {title}({release_date.slice(0, 4)})
                        </h2>
                        <p className="star-box">
                            <IconContext.Provider value={{color: " #f6eedf", className: "star-emoji"}}>
                                    <BsStar alt="star rating icon" />       
                            </IconContext.Provider>&nbsp;&nbsp;
                            {average_rating.toFixed(1)}
                        </p>
                        <p className="summary">{overview}</p>
                        <p>Genres: {genres.join(", ")}</p>
                        <Link className='back-button' to="/">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
            ) : (
            <div className="error-message-single">
                <h4 className="error-message">Couldn't communicate with the server. Please try again later.</h4>
                <Link className='back-button' to='/'>
                </Link>
            </div>
            );
    }
}

SingleMovie.propTypes = {
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.number,
    average_rating: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array
};

SingleMovie.defaultProps = {
    movie: null
}