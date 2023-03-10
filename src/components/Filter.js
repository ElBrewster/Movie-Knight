import React from 'react';
import PropTypes from "prop-types";

export default class Filter extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: '0'
        };
    }

    handleFilterByRating = (event) => {
        this.setState({ rating: event.target.value });
        this.props.changeByRating(event.target.value);
    };

    componentWillUnmount() {
        this.setState({ rating: '0' });
        this.props.changeByRating('0');
    };

    render() {
        return (
            <section className="flexbox">
                <section className="bumper"></section>
                <section className='heading--all-movies'>
                        <h2 className='banana'>Filter By Rating</h2>
                        {this.state.error && <h4 className="text--error">Couldn't communicate with the server. Please try again later.</h4>}
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
            </section>
        );
    };
};

Filter.propTypes = {
    changeByRating: PropTypes.func.isRequired
}

Filter.defaultProps = {
    rating: 0
}