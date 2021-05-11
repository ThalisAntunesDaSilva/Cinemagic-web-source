import React, { useState } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css';

import axios from "axios";
import { login, getToken } from '../../services/auth/auth.js';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


const Example = (props) => {
    let history = useHistory();

    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [duracao, setDuracao] = useState('');


    async function acaoBotao(e) {
        e.preventDefault();
        /*
        const options = {
            method: 'POST',
            url: 'http://localhost:8080/filmes',
            headers: {
            'Content-Type': 'application/json',
            authorization: getToken()
            },
            data: { titulo: titulo, duracao: duracao, genero: { id: genero } }
        };
        */

        const options = await api.post("/filmes", {
            headers: {
                'Content-Type': 'application/json',
                authorization: getToken()
            },
            data: { titulo: titulo, duracao: duracao, genero: { id: genero } }
        },
        );
        window.location.href = options.data.code;
        history.push(options.data.code);


        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        alert("Filme cadastrado");

    }

    return (
        <Form className="form">
            <Col sm="20" md={{ size: 4, offset: 4 }}>
                <FormGroup >
                    <Label for="titulo" >Título</Label>
                    <Input type="text" name="titulo" onChange={e => setTitulo(e.target.value)} id="titulo" placeholder="Título do filme" />
                </FormGroup>
                <FormGroup >
                    <Label for="duracao" >Duraçao</Label>
                    <Input type="text" name="duracao" onChange={e => setDuracao(e.target.value)} id="duracao" placeholder="Duraçao do filme" />
                </FormGroup>
                <FormGroup>
                    <Label for="genero">Gênero</Label>
                    <Input type="number" name="genero" id="genero" onChange={e => setGenero(e.target.value)} />
                </FormGroup>
            </Col>
            <Row form>
                <Col sm="20" md={{ size: 4, offset: 4 }}>
                    <Button outline color="danger" size="lg" onClick={acaoBotao}>Inserir</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default Example;