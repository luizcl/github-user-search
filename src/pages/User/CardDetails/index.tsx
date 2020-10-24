import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.scss'
import ImageLoader from '../components/Loaders/imageLoader';
import InfoLoader from '../components/Loaders/infoLoader';
import dayjs from 'dayjs';

type ParamsType = {
    userName: string;
}

type User = {
    name: string,
    avatar_url: string,
    html_url: string,
    company: string,
    blog: string,
    location: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}

const CardDetails = () => {

    const { userName } = useParams<ParamsType>();
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);
    const BASE_URL = 'https://api.github.com/users/';

    useEffect(() => {

        setIsLoading(true);
        axios({
            method: 'GET',
            url: BASE_URL + userName,
        })
            .then((response) => setUser(response.data) )
            .finally(() => setIsLoading(false) );
    }, [userName]);

    const formatDate = (date: string) => (
        dayjs(date).format("DD/MM/YYYY")
    );

    return (
        <div className="card-style card-details-form">
            <div className="card-details-info-form">
                {isLoading ?
                    <>
                        <div className="card-details-img-item-loader">
                            <ImageLoader />
                        </div>
                        <div className="card-details-info-item">
                            <InfoLoader />
                        </div>
                    </> :
                    <>
                        <img src={user?.avatar_url} alt={user?.name} className="card-details-img-item" />
                        <div className="card-details-info-item">
                            <div className="card-details-header">
                                <h1 className="card-details-square-header card-details-form-style">
                                    {`Repositórios públicos: ${user?.public_repos}`}
                                </h1>
                                <h1 className="card-details-square-header card-details-form-style">
                                    {`Seguidores: ${user?.followers}`}
                                </h1>
                                <h1 className="card-details-square-header card-details-form-style">
                                    {`Seguindo: ${user?.following}`}
                                </h1>
                            </div>
                            <div className="card-details-info card-details-form-style">
                                <h1 className="card-details-info-title">
                                    Informações
                                    </h1>
                                <h1 className="card-details-info-description">
                                    Empresa: <div className="card-details-info-content">{user?.company}</div>
                                </h1>
                                <h1 className="card-details-info-description">
                                    Website/Blog: <div className="card-details-info-content">{user?.blog}</div>
                                </h1>
                                <h1 className="card-details-info-description">
                                    Localidade: <div className="card-details-info-content">{user?.location}</div>
                                </h1>
                                <h1 className="card-details-info-description">
                                    Membro desde: 
                                    {user?.created_at && 
                                        <div className="card-details-info-content">{formatDate(user.created_at)}</div>
                                    }
                                </h1>
                            </div>
                        </div>
                    </>
                }
            </div>
            { user?.html_url &&
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" >
                    <button className="btn-style btn-access-profile">Ver perfil</button>
                </a>
            }

        </div>
    );
}

export default CardDetails;