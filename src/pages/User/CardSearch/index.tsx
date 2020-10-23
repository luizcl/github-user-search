import React, { useState } from 'react';
import Button from '../../../core/components/Button';


const CardSearch = () => {
    const [userName, setUserName] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
        console.log(userName);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="card-form card-style">
                <h1>
                    Encontre um perfil Github
            </h1>
                <input
                    className="input-user-style"
                    type="text"
                    value={userName}
                    onChange={handleOnChange}
                    placeholder="Nome do Usuário"
                />
                <Button text="Encontrar" to={`/user/${userName}`} className="btn-user-change" />
            </div>
        </form>
    );
};

export default CardSearch;