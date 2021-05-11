import React, { useState, useEffect } from 'react';
import {
    Button, Jumbotron, Row, Col, Form, FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import { login, getToken } from '../../services/auth/auth.js';


import axios from "axios";
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';




const Example = (props) => {


    async function acaoBotao(e) {
        const options = {
            method: 'PUT',
            url: 'http://localhost:8080/filmes/1',
            headers: {
                'Content-Type': 'application/json',
                authorization: getToken()
            },
            data: [{ titulo: '3000', duracao: '2h00', genero: { id: 2, descricao: 'Crime' } }]
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }


    return (
        <Button color="danger" onClick={acaoBotao}>Editar</Button>
    );
}
export default Example;