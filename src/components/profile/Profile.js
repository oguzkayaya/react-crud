import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Profile.css";

function Profile() {
    const params = useParams();

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUserInfo(json);
            });
    }, [])

    return (
        <div className="profile">
            <div>{userInfo.id}</div>
            <div>{userInfo.email}</div>
            <div>{userInfo.name}</div>
            <div>{userInfo.phone}</div>
            <div>{userInfo.username}</div>
            <div>{userInfo.website}</div>
        </div>
    )
}

export default Profile
