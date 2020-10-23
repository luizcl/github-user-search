import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.scss'

type ParamsType = {
    userName: string;
}

type User = {
    "login": "luizcl",
    "id": 48841821,
    "node_id": "MDQ6VXNlcjQ4ODQxODIx",
    avatar_url: string,
    "gravatar_id": "",
    url: string,
    "html_url": "https://github.com/luizcl",
    "followers_url": "https://api.github.com/users/luizcl/followers",
    "following_url": "https://api.github.com/users/luizcl/following{/other_user}",
    "gists_url": "https://api.github.com/users/luizcl/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/luizcl/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/luizcl/subscriptions",
    "organizations_url": "https://api.github.com/users/luizcl/orgs",
    "repos_url": "https://api.github.com/users/luizcl/repos",
    "events_url": "https://api.github.com/users/luizcl/events{/privacy}",
    "received_events_url": "https://api.github.com/users/luizcl/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Luiz",
    company: string,
    blog: string,
    location: string,
    "email": null,
    "hireable": true,
    "bio": "Still learning...",
    "twitter_username": null,
    public_repos: number,
    "public_gists": 0,
    followers: number,
    following: number,
    created_at: Date,
    "updated_at": "2020-10-22T01:00:26Z"
}

type User_teste = {
    name: string,
    avatar_url: string,
    url: string,
    company: string,
    blog: string,
    location: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: Date,
}

const CardDetails = () => {

    const { userName } = useParams<ParamsType>();
    const [user, setUser] = useState<User_teste>();
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const BASE_URL = 'https://api.github.com/users/';

    useEffect(() => {

        setIsLoading(true);
        axios({
            method: 'GET',
            url: BASE_URL + userName,
        })
            .then((response) => {
                console.log(response);
                setStatus(response.status);
                setUser(response.data);
            })
            .finally(() => setIsLoading(false));
    }, [userName]);

    return (
        <div className="card-style card-details-form">
            <img src={user?.avatar_url} alt={user?.name} className="img-card-details"/>
        </div>
    );
}

export default CardDetails;