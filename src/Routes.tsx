import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';


const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact >
                Inicio
            </Route>
            <Route path="/search" >
                Pesquisa
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;