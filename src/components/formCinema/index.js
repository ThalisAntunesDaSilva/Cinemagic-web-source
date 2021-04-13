import React, { useState }  from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../services/auth/auth';
import './styles.css';


const Example = (props) => { 
    const [nome,setNome] = useState([]);
    const [cidadeId,setCidadeId] = useState([]);

    async function click(e) {
    e.preventDefault();
    
    const data =[ {
        nome: nome,
        cidadeId: cidadeId,
   
        }]
    try {
    const response = await api.post("cinemas", data, 
    {headers: {authorization: getToken(),}},);    

    } catch (ex) {
        alert(ex.response.data.message)
    }

    }

    return (
        <Form>
          <h1>Insira os dados do Cinema</h1>
  <div className="formularioDeSessao">
   
        <div className="lado1">
        <Label for="Nome" className="Nome text-light mt-3">Nome do cinema</Label>
        <Input size="md" onChange={e => setNome(e.target.value)}/>

        
        <Label for="Nome" className="Nome text-light mt-3">Id cidade</Label>
        <Input size="md" onChange={e => setCidadeId(e.target.value)}/>

      
        </div>
        <div className="lado2">
        <Label for="Nome" className="Nome text-light mt-3">Número de salas</Label>
        <Input> 
        </Input>
        <Button color="danger" className="mt-5" onClick={click}>Cadastrar</Button>
        </div>
        </div>      
                     

        </Form>
        


    );
}

export default Example;