// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './components/home/HomeScreen';
import MovieDetailsScreen from './components/movie-detail/MovieDetailsScreen';
import SearchResults from './components/search-result/SearchResults';
import SearchBar from './components/search-bar/SearchBar';
import './App.css'

const App: React.FC = () => {

  return (
      <Router>
        <div>
          <Navbar />
          <SearchBar />
            <div className={'container'}>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/movie/:id" element={<MovieDetailsScreen />} />
                    <Route path="/search" element={<SearchResults/>} />
                </Routes>
            </div>

        </div>
      </Router>
  );
};

export default App;
