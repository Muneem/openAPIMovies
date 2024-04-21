// src/App.tsx

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import MovieDetailsScreen from './components/MovieDetailsScreen';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import {mockMovies} from "./mockData";

const App: React.FC = () => {
    const [searchResults, setSearchResults] = useState<any[]>([]);
  // const handleSearch = (query: string) => {
  //     const filteredMovies = mockMovies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
  //     setSearchResults(filteredMovies);
  // };

  return (
      <Router>
        <div>
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/movie/:id" element={<MovieDetailsScreen />} />
            <Route path="/search" element={<SearchResults movies={searchResults}/>} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
