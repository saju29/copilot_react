import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <Link to="/post/1">
                <button>Get Post</button>
            </Link>
            <Link to="/list">
                <button>List Posts</button>
            </Link>
        </div>
    );
};

export default Welcome;