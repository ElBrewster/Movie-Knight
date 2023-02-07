import React from 'react'
import AllMovies from './AllMovies'
import Footer from "./Footer.js";
import Header from "./Header.js";
import SingleMovie from './SingleMovie';
import { Route } from "react-router-dom";

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
    return (
        <div className='App'>
            <Header />
            <Route exact path="/" component={AllMovies}/>
            <Route path="/movies/:id" component={SingleMovie}/>
            <Footer />
        </div>
    );
  }
}

