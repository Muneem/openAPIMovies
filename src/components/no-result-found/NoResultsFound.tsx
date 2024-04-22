// src/components/NoResultsFound.tsx

import React from 'react';
import './NoResultsFound.css'; // Import CSS file

const NoResultsFound: React.FC = () => {
    return (
        <div className="no-results">
            <h3>No results found</h3>
            <p>Please try a different search term.</p>
        </div>
    );
};

export default NoResultsFound;
