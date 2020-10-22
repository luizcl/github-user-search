import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss'

const User = () => {

    const Card = () => (
        <div className="card-form card-style">
            <div>
                <h1>
                    Encontre um perfil Github
                </h1>
                <input
                    className="input-style">
                </input>
            </div>
            <Button text="Encontrar" to="/user/:userName" className="btn-user-change"/>
        </div>
    );
    
    return (
        <BrowserRouter>
            <Card />
            <Switch>
                <Route path="/user/:userName">

                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default User;