import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
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