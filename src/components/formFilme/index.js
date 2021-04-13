import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles.css';
import api from '../../services/api';
import { getToken } from '../../services/auth/auth'


const Example = (props) => {
  //const [generos, setGeneros] = useState([]);

const [titulo, setTitulo] = useState('');
const [duracao, setDuracao] = useState('');


async function click(evento){
const data =[ {
   titulo: titulo,
   duracao: duracao,  
}]
try {
   const response = await api.post("filmes", data,{
      headers: { 
authorization: getToken(),
      }
   }, 
 );
} catch (ex){
  alert(ex.response.data.message)
}}
/*
  useEffect(() => {
    getGeneros();

  });

  async function getGeneros() {
    try {
      const resposta = await api.get("generos")
      setGeneros(resposta.data);
    } catch (e) {
      alert(e);
    }
  }

*/

  return (

    <Form className="form">
      <h1>Insira os dados do Filme</h1>
      <div className="layout">

        <div className="ld1">
          <Label for="titulo" >Título</Label>
          <Input onChange={evento => setTitulo(evento.target.value)} />
         </div>
        <div className="ld2">  
          <Label>Duração</Label>
          <Input onChange={evento => setDuracao(evento.target.value)}/>
          <Button color="danger" className="mt-3" size="lg" onClick={click}>Inserir</Button>
        </div>
      </div>
    </Form>

  );
}

export default Example;
