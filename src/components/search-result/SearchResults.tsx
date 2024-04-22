// src/components/SearchResults.tsx

import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import MovieCard from '../movie-card/MovieCard';
import {mockMovies} from "../../mockData";
import NoResultsFound from "../no-result-found/NoResultsFound";

interface Movie {
    id: string;
    title: string;
    poster: string;
}

interface SearchResultsProps {
    movies?: Movie[];
}

const SearchResults: React.FC<SearchResultsProps> = ({movies}) => {
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const location = useLocation();
    useEffect(() => {
        // Function to parse query parameters from URL
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('query');

        if (query) {
            // Filter mock data based on the search query
            const filteredMovies = mockMovies.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredMovies);
        }
    }, [location.search]);
    return (
        searchResults.length > 0 ?
            <div>

                <h2>Search Results</h2>
                <div className="movie-list">
                    {searchResults?.map((movie) => (
                        <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster}/>
                    ))}
                </div>
            </div> :
            <NoResultsFound/>
    );
};

export default SearchResults;
