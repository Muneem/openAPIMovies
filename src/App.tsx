// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import MovieDetailsScreen from './components/MovieDetailsScreen';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
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
