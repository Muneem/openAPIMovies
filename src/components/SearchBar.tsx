// src/components/SearchBar.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form"> {/* Added className */}
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for movies..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;
