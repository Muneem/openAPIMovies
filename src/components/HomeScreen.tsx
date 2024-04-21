// src/components/HomeScreen.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {mockMovies} from "../mockData";

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
                const response = await axios.get('https://search.imdbot.workers.dev/');
                setRandomMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching random movies:', error);
                setRandomMovies(mockResponse.results);
            }
        }

        fetchRandomMovies();
    }, []);

    return (
        <div>
            <h1>Random Movies</h1>
            <div className="movie-list">
                {randomMovies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
