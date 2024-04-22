// src/components/HomeScreen.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {mockMovies} from "../../mockData";
import './HomeScreen.css';
import MovieCard from "../movie-card/MovieCard";


interface Movie {
    id: string;
    title: string;
    poster: string;
}
const mockResponse: { results: Movie[] } = {
    results: mockMovies
};

const HomeScreen = () => {
    const [randomMovies, setRandomMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function fetchRandomMovies() {
            try {
                // TODO API returns too many request so i have hardcoded response here
                const response = await axios.get('https://search.imdbot.workers.dev/?q=inception');
                if(response && response.data.results) {
                    setRandomMovies(response.data.results);
                }
                else {
                    setRandomMovies(mockResponse.results);
                }

            } catch (error) {
                console.error('Error fetching random movies:', error);
                setRandomMovies(mockResponse.results);
            }
        }

        fetchRandomMovies();
    }, []);

    return (
        <div className="homescreen">
            <h1>Random Movies</h1>
            <div className="movie-list">
                {randomMovies.map((movie) => (
                    <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster}/>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
