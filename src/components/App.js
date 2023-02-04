import React from 'react'
import AllMovies from './AllMovies'
import Footer from "./Footer.js";
import Header from "./Header.js";
import SingleMovie from './SingleMovie';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null
    }
  }

  selectMovie = (movie) => {
    this.setState({selectedMovie: movie})
  }

  resetState = () => {
    this.setState({selectedMovie: null})
  }

  render () {
    const { selectedMovie } = this.state;
    return (
        <div className='App'>
            <Header />
            { selectedMovie ? (<SingleMovie movie={ selectedMovie } resetState={ this.resetState } />
              ) : (
                <AllMovies selectMovie={ this.selectMovie }/>
              )}
            <Footer />
        </div>
    );
  }
}

