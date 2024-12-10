import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetPost = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
    }, []);

    return (
        <div>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/">
                <button>Back to Welcome</button>
            </Link>
        </div>
    );
};

export default GetPost;
