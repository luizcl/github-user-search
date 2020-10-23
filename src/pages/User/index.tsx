import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardSearch from './CardSearch';
import './styles.scss'

const User = () => {

     const CardDetails = () => (
        <div>
            <h1>Detalhe</h1>
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