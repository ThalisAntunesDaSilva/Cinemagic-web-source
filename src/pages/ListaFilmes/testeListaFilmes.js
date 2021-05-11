/*
import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import api from '../../services/api'
import './styles.css';



export default function Teste() {
    const [filme, setFilmes] = useState([]);
    const token = localStorage.getItem('token');
    const [test, setTest] = useState('')

    async function getApi() {
        try {
            const res = await api.get("filmes")
            setFilmes(res.data)
            setTest(res.data[0])
        } catch (ex) {
            alert(ex)
        }
    }
    useEffect(() => {
        getApi()
    }, [token])

    

    return (
        <>  
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Cinemas</a></li>
                <li><a href="">Sessoes</a></li>
            </ul>
            <div>
                <ul>
                    <h1 className="title">Filmes cadastrados:</h1>
                    <Card body inverse color="primary">
                        {filme.map(ses => (
                            <CardBody key={ses.id}>
                                <CardImg top width="100%" src="" alt="Imagem" />
                                <CardTitle tag="h5">{ses.titulo}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">ID: {ses.id}</CardSubtitle>
                                <CardText>Tempo do filme: {ses.duracao}</CardText>
                                <CardText>Genero do filme:</CardText>
                                <Button>Assistir</Button>
                            </CardBody>
                        ))}
                    </Card>
                </ul>
            </div>
        </>
    );
}

*/
/*
h1 {
    text-align: center;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover

li a:hover {
    background-color: #111;
}

.card {
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 210px 210px 80px;
    grid-template-areas: "image" "text" "stats";
    font-family: roboto;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0);
    text-align: center;
}

.card-image {
    grid-area: image;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
}

.card-text {
    grid-area: text;
    margin: 25px;
}

.card-text .date {
    color: rgb(255, 7, 110);
    font-size: 13px;
}

.card-text p {
    color: gray;
    font-size: 15px;
    font-weight: 300;
}

.card-text h2 {
    margin-top: 0px;
    font-size: 28px;
}
*/