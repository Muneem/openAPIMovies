// src/components/MovieDetailsScreen.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface MovieDetails {
    title: string;
    description: string;
    poster: string;
    actors: string[];
    reviews: string[];
    id: string
}

const mockMovieDetails: MovieDetails = {
    id: "tt0111161",
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://via.placeholder.com/300x450?text=Shawshank+Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    reviews: [
        "One of the greatest movies of all time!",
        "An unforgettable story with brilliant performances."
    ]
};

const MovieDetailsScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const response = await axios.get(`https://search.imdbot.workers.dev/${id}`);
                setMovieDetails(response.data);
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
        <div>
            <h2>{movieDetails.title}</h2>
            <img src={movieDetails.poster} alt={movieDetails.title} />
            <p>{movieDetails.description}</p>
            <h3>Actors:</h3>
            <ul>
                {movieDetails.actors.map((actor, index) => (
                    <li key={index}>{actor}</li>
                ))}
            </ul>
            <h3>Reviews:</h3>
            <ul>
                {movieDetails.reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetailsScreen;
