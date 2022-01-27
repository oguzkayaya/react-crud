import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import "./Posts.css";

function Posts() {

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            }
            );

    }, [])

    return (
        <div className="posts">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <div className="post-id">{post.id}</div>
                    <div className="post-title">{post.title}</div>
                    <div className="post-buttons">
                        <button className="btn-info" onClick={() => { navigate(`/post/${post.id}`) }}>DETAY</button>
                        <button className="btn-success">DÜZENLE</button>
                        <button className="btn-danger">SİL</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts
