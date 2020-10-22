import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss'

const User = () => {

    const [userName, setUserName] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
        console.log(userName)
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const CardSearch = () => (
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
                    placeholder="Nome do Usuário">
                </input>
            {/*<Button text="Encontrar" to={`/user/${userName}`} className="btn-user-change"/>*/}
        </div>
        </form>
    );
    
    const CardDetails = () => (
        <div>

        </div>
    );

    return (
        <BrowserRouter>
            <CardSearch />
            <Switch>
                <Route path="/user/:userName">
                    <CardDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default User;