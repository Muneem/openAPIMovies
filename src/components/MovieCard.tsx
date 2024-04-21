// src/components/MovieCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    id: string;
    title: string;
    poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${id}`}>
                <img src={poster} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    );
};

export default MovieCard;
