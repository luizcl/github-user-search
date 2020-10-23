import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.scss'
import ImageLoader from '../components/Loaders/imageLoader';
import InfoLoader from '../components/Loaders/infoLoader';

type ParamsType = {
    userName: string;
}

type User = {
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
    const [user, setUser] = useState<User>();
    const [statusOk, setStatusOk] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const BASE_URL = 'https://api.github.com/users/';

    useEffect(() => {

        setIsLoading(true);
        axios({
            method: 'GET',
            url: BASE_URL + userName,
        })
            .then((response) => {
                console.log("Deu bom");
                console.log(response);
                setStatusOk(response.status === 200);
                console.log(statusOk);
                setUser(response.data);
            })
            .finally(() => {
                setIsLoading(false);
                if(!statusOk){
                    console.log("Deu ruim")
                    setUser({
                        name : "Usuário não encontrado",
                        avatar_url: "https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-panda-com-problema-error-404-not-found.jpeg",
                        url: "",
                        company: "",
                        blog: "",
                        location: "",
                        public_repos: 0,
                        followers: 0,
                        following: 0,
                        created_at: new Date("0000-00-00T00:00:00Z"),
                    });
                }
                console.log("Passou aqui");
                console.log(user);

            });
    }, [userName]);

    return (
        <div className="card-style card-details-form">
            { isLoading ? 
                        <>
                            <div className="img-item">
                                <ImageLoader /> 
                            </div>
                            <div className="info-item">
                                <InfoLoader />
                            </div>
                        </> : 
                        <>
                            <img src={user?.avatar_url} alt={user?.name} className="img-card-details" />
                        </>
            }
        </div>
    );
}

export default CardDetails;