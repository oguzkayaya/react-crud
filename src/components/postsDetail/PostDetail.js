import React, { useEffect, useState } from 'react';
import "./PostDetail.css";
import { Link, useParams } from 'react-router-dom';

function PostDetail({ }) {

    const params = useParams();

    const [postDetail, setPostDetail] = useState({});
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((response) => response.json())
            .then((json) => {
                setPostDetail(json);
                console.log(json);
                fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`)
                    .then((profileResponse) => profileResponse.json())
                    .then((profileJson) => {
                        setUserInfo(profileJson);
                    });
            });
    }, [])
    return (
        <div className="post-detail">
            <div><h2>{postDetail.title}</h2></div>
            <div>{postDetail.body}</div>
            <div><Link to={`/profile/${postDetail.userId}`}>user: {userInfo.name}</Link></div>
        </div>
    )
}

export default PostDetail
