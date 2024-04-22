// src/components/MovieCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';


interface MovieCardProps {
    id: string;
    title: string;
    poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${id}`} className="movie-link"> {/* Added className */}
                <img src={poster} alt={title} className="movie-poster"/> {/* Added className */}
                <h3 className="movie-title">{title}</h3> {/* Added className */}
            </Link>
        </div>
    );
};

export default MovieCard;
