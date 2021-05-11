import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import { Redirect, useHistory } from 'react-router-dom';
import { login, getToken } from '../../services/auth/auth.js';
import './styles.css';
import api from '../../services/api';


const Example = (props) => {

    let history = useHistory();

    //PARA GENEROS
    const [generos, setGeneros] = useState([]);
    const token = localStorage.getItem('token');
    const [test, setTest] = useState('')

    //PARA CADASTRO
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [duracao, setDuracao] = useState('');

    async function getApi() {
        try {
            const res = await api.get("generos")
            setGeneros(res.data)
            setTest(res.data[0])
        } catch (ex) {
            alert(ex)
        }
    }
    useEffect(() => {
        getApi()
    }, [token])

    async function acaoBotao(e) {
        e.preventDefault();

        const data = {
            titulo: titulo,
            duracao: duracao,
            genero: {
                id: genero
            },
            filmes: [
                {
                    titulo: titulo,
                    duracao: duracao,
                    genero: {
                        id: genero
                    }
                }
            ]
        };
        try {
            const res = await api.post("/filmes", data, {
                headers: {
                    authorization: getToken()
                }
            },
            );
            window.location.href = res.data.code;
            history.push(res.data.code);
        } catch (ex) {
            alert(ex.response.data.message)
        }
    }






    return (
        <div className="body-section">
            <ul className="super">
                <li><a href="">Home</a></li>
                <li><a href="/ListaFilmes">Lista Filmes</a></li>
                <li><a href="">Sessoes</a></li>
            </ul>
            <div>
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
                            <Input type="number" name="genero" id="genero" onChange={e => setGenero(e.target.value)} placeholder="ID do genero" />
                        </FormGroup>
                    </Col>
                    <Row form>
                        <Col sm="20" md={{ size: 4, offset: 4 }}>
                            <Button outline color="danger" size="lg" onClick={acaoBotao}>Inserir</Button>
                        </Col>
                    </Row>
                </Form>
                <div>
                    <ul>
                        <h3 className="title">Generos cadastrados</h3>
                        {generos.map(ses => (
                            <li key={ses.id}>
                                <div>
                                    <h5>Genero ID: {ses.id}, Descrição: {ses.descricao} </h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Example;