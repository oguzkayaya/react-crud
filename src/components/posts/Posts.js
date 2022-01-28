import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import "./Posts.css";


function Posts() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    const [updatedId, setUpdatedId] = useState("");
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedBody, setUpdatedBody] = useState("");
    const [updatedUserId, setUpdatedUserId] = useState("");

    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            }
            );

    }, [])

    const openUpdateModal = (post) => {
        setShowDetail(true);
        setUpdatedTitle(post.title);
        setUpdatedBody(post.body);
        setUpdatedId(post.id);
        setUpdatedUserId(post.userId);
    }

    const updatePost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${updatedId}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: updatedId,
                title: updatedTitle,
                body: updatedBody,
                userId: updatedUserId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setPosts(posts.map((post) => {
                    if(post.id == json.id) {
                        return json;
                    }
                    return post;
                }));
                setShowDetail(false);
            }
            );
    }

    return (
        <div>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-id">{post.id}</div>
                        <div className="post-title">{post.title}</div>
                        <div className="post-buttons">
                            <button className="btn-info" onClick={() => { navigate(`/post/${post.id}`) }}>DETAY</button>
                            <button className="btn-success" onClick={() => { openUpdateModal(post) }}>DÜZENLE</button>
                            <button className="btn-danger">SİL</button>
                        </div>
                    </div>
                ))}
            </div>
            {showDetail && (
                <div className="detail-modal">
                    <div className="modal-title">Düzenle</div>
                    <div className="modal-body">
                        <div className="modal-row">
                            <div className="modal-label">
                                Title
                            </div>
                            <div className="modal-input">
                                <input type="text" value={updatedTitle} onChange={(e) => { setUpdatedTitle(e.target.value) }} />
                            </div>
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">
                                Body
                            </div>
                            <div className="modal-textarea">
                                <textarea rows="4" value={updatedBody} onChange={(e) => { setUpdatedBody(e.target.value) }}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-update" onClick={updatePost}>Güncelle</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Posts
