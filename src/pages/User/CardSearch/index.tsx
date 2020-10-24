import React, { useState } from 'react';
import Button from 'core/components/Button';
import { useHistory } from 'react-router-dom';
import './styles.scss'


const CardSearch = () => {
    const [userName, setUserName] = useState('');

    const history = useHistory();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
        history.push('/search/');
        
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="card-search-form card-style">
                <h1>
                    Encontre um perfil Github
                </h1>
                <input
                    className="input-card-search-style"
                    type="text"
                    value={userName}
                    onChange={handleOnChange}
                    placeholder="Usuário Github"
                />
                <Button text="Encontrar" to={`/search/${userName}`} className="btn-card-search-change" />
            </div>
        </form>
    );
};

export default CardSearch;