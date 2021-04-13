import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Pesquisa from './pages/Pesquisa';
import Compra from './pages/Compra';
import CadastroCliente from './pages/CadastroCliente';
import CadastroCinema from './pages/CadastroCinema';
import CadastroFilme from './pages/CadastroFilme';
import CadastroSessao from './pages/CadastroSessao';
import ListaSessoes from './pages/ListaSessoes';
import ListaFilmes from './pages/ListaFilmes'
import ListaResultadoPesquisa from './pages/ListaResultadoPesquisa'



import { isAuthenticaded } from './services/auth/auth.js';

const PrivateRouteLogin = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !isAuthenticaded() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticaded() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
            )

        }
    />
);


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/Compra" component ={Compra}/>  
                <Route path="/" exact component={Home} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Pesquisa" exact component={Pesquisa} />
                <Route path="/Compra" exact component={Compra} />
                <Route path="/CadastroCliente" exact component={CadastroCliente} />
                <Route path="/CadastroCinema" exact component={CadastroCinema} />
                <Route path="/CadastroSessao" exact component={CadastroSessao} />
                <Route path="/CadastroFilme" exact component={CadastroFilme} />
                <Route path="/ListaSessoes" exact component={ListaSessoes} />
                <Route path="/ListaFilmes" exact component={ListaFilmes} />
                <Route path="/ResultadoPesquisa" exact component={ListaResultadoPesquisa} />
                <Route path="/ResultadoPesquisa" exact component={ListaResultadoPesquisa} />
            </Switch>
        </BrowserRouter>
    );





}