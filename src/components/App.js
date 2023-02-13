import React from 'react';
import Footer from "./Footer.js";
import Header from "./Header.js";
import AllMovies from './AllMovies'
import SingleMovie from './SingleMovie';
import { Route } from "react-router-dom";


export default function App() {
    return (
        <div className='App'>
            <Header />
            <Route exact path="/" component={AllMovies}/>
            <Route path="/movies/:id" component={SingleMovie}/>
            <Footer />
        </div>
    );
};


