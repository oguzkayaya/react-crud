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
                setUserInfo(json);
            });
    }, [])

    return (
        <div className="profile">
            <div className="name">{userInfo.name}</div>
            <div className="city">{userInfo.address?.city}</div>

            <div className="user-info">
                <div className="label">Username</div>
                <div className="value">{userInfo.username}</div>
            </div>
            <div className="user-info">
                <div className="label">Email</div>
                <div className="value">{userInfo.email}</div>
            </div>
            <div className="user-info">
                <div className="label">Phone</div>
                <div className="value">{userInfo.phone}</div>
            </div>
            <div className="user-info">
                <div className="label">Website</div>
                <div className="value"><a href="">{userInfo.website}</a></div>
            </div>
            <div className="user-info">
                <div className="label">Company</div>
                <div className="value">{userInfo.company?.name}</div>
            </div>

            <div className="line"></div>


            <div className="profile-bottom-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ut ea nostrum numquam officiis quas commodi dolores nobis eaque veniam quos impedit sit,
                eligendi architecto cum vitae minima suscipit cupiditate iure ratione asperiores rerum atque aperiam deserunt est.
            </div>
            <div className="profile-show-more">
                Show more
            </div>
        </div>
    )
}

export default Profile
