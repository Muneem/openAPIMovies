// src/components/MovieDetailsScreen.tsx

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './MovieDetailsScreen.css';

interface MovieDetails {
    title: string;
    description: string;
    poster: string;
    actors: {name: string}[];
    id: string
}

const mockMovieDetails: MovieDetails = {
    id: "tt0111161",
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://via.placeholder.com/300x450?text=Shawshank+Redemption",
    actors: [{name: "Tim Robbins"}, {name: "Morgan Freeman"}, {name: "Bob Gunton"}],

};

const MovieDetailsScreen: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const response = await axios.get(`https://search.imdbot.workers.dev/?tt=${id}`);
                const movieDetails = {
                    id: response.data.main.id,
                    title: response.data.short.title,
                    description: response.data.short.description,
                    poster: response.data.short.image,
                    actors: response.data.short.actor,
                }
                setMovieDetails(movieDetails);
            } catch (error) {
                setMovieDetails(mockMovieDetails);
                console.error('Error fetching movie details:', error);
            }
        }

        fetchMovieDetails();
    }, [id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details">
            <div>
                <h2>{movieDetails.title}</h2>
                <img src={movieDetails.poster} alt={movieDetails.title}
                     className="movie-detail-poster"/> {/* Added className */}
            </div>
            <div>
                <p>{movieDetails.description}</p>
                <h3>Actors:</h3>
                <ul>
                    {movieDetails.actors.map((actor, index) => (
                        <li key={index}>{actor.name}</li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default MovieDetailsScreen;
