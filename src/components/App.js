// import logo from './logo.svg';
import React from 'react'
import AllMovies from './AllMovies'
import '../css/App.scss';
import Footer from "./Footer.js";
import Header from "./Header.js";
import SingleMovie from './SingleMovie';

export default function App() {
  return (
      <div className='App'>
          <Header />
          <AllMovies />
          <SingleMovie />
          <Footer />
      </div>
  );
}

// export default App;
