import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardDetails from './CardDetails';
import CardSearch from './CardSearch';
import './styles.scss'

const User = () => {

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