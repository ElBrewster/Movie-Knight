import React from "react";
import "../css/SingleMovie.scss";
import movieData from "../apiCalls/mock-data";

export default class SingleMovie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: this.props.movie
        }
    }

    returnToMainPaige = () => {this.props.resetState()}

    render() {
        return (
            <div className="single-page-container">
                <img src={this.state.movie.poster_path}/>
                <div className="single-movie-description">
                    <h2>
                        {this.state.movie.title}(
                            {this.state.movie["release_date"].slice(0, 4)}
                        )
                    </h2>
                    <p>{this.state.movie["average_rating"].toFixed(1)}</p>
                    <p>add single movie API description</p>
                    <button onClick={this.returnToMainPaige}>back</button>
                </div>
            </div>
        )
    }
}