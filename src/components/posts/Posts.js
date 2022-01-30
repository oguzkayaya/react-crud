import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import "./Posts.css";
import closeIcon from "../../close-icon.png";


function Posts() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    const [showDetail, setShowDetail] = useState(false);
    const [updatedId, setUpdatedId] = useState("");
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedBody, setUpdatedBody] = useState("");
    const [updatedUserId, setUpdatedUserId] = useState("");

    const [showDelete, setShowDelete] = useState(false);
    const [deletedPost, setDeletedPost] = useState({});

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
        setShowDelete(false);
        setUpdatedTitle(post.title);
        setUpdatedBody(post.body);
        setUpdatedId(post.id);
        setUpdatedUserId(post.userId);
        window.scrollTo({ behavior: 'smooth', top: 0 })
    }

    const openDeleteModal = (post) => {
        setShowDelete(true);
        setShowDetail(false);
        setDeletedPost(post);
        window.scrollTo({ behavior: 'smooth', top: 0 })
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
        }
        )
            .then((response) => response.json())
            .then((json) => {
                setPosts(posts.map((post) => {
                    if (post.id == json.id) {
                        return json;
                    }
                    return post;
                }));
                setShowDetail(false);
            });
    }

    const deletePost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${deletedPost.id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setPosts(posts.filter(post => post.id != deletedPost.id));
                    setShowDelete(false);
                }
            });

    }

    return (
        <div>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-text">
                            <div className="post-id">{post.id}</div>
                            <div className="post-title">{post.title}</div>
                        </div>
                        <div className="post-buttons">
                            <button className="btn btn-info" onClick={() => { navigate(`/post/${post.id}`) }}>DETAY</button>
                            <button className="btn btn-success" onClick={() => { openUpdateModal(post) }}>DÜZENLE</button>
                            <button className="btn btn-danger" onClick={() => { openDeleteModal(post) }}>SİL</button>
                        </div>
                    </div>
                ))}
            </div>
            {showDetail && (
                <div className="detail-modal">
                    <div className="modal-title">Düzenle <img src={closeIcon} alt="" className="modal-close-icon" onClick={() => { setShowDetail(false) }} /></div>
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
                        <button className="btn btn-update" onClick={updatePost}>Güncelle</button>
                    </div>
                </div>
            )}
            {
                showDelete && (
                    <div className="delete-modal">
                        <div className="modal-title">Sil <img src={closeIcon} alt="" className="modal-close-icon" onClick={() => { setShowDelete(false) }} /></div>
                        <div className="modal-body">
                            <div className="post-id">{deletedPost.id}</div>
                            <div className="post-title">{deletedPost.title}</div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={deletePost}>Sil</button>
                            <button className="btn btn-update" onClick={() => { setShowDelete(false) }}>İptal</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Posts
