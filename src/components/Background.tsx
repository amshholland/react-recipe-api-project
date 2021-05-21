import './Background.css';

import React from 'react';
import { SearchForm } from './SearchForm';

export function Background() {
    return (
        <div className="Background">
            <img className="background" src={ process.env.PUBLIC_URL + 'background.jpg' } />
            <SearchForm />

        </div>
    );
}