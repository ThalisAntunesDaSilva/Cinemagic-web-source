import React, { useState } from 'react';
import { Form, Input, Label, Button } from 'reactstrap';
import api from '../../services/api';
import { getToken } from '../../services/auth/auth'
import { useHistory } from 'react-router-dom';
import './styles.css';

const sessao = JSON.parse(localStorage.getItem('sessaoAtual'));
const cliente = JSON.parse(localStorage.getItem('cliente'));





const Example = (props) => {
  const history = useHistory();
  const [qtdInteira,setQtdInteira] = useState(0);
  const [qtdMeia,setQtdMeia] = useState(0);
  async function click(e) {
    alert(qtdMeia);
    const data = {
      clienteId: sessao.id,
      sessaoId: cliente.id,
      ingressos: [
        {
          quantidade: qtdMeia,
          tipoIngresso: 1
        },
        {
          quantidade: qtdInteira,
          tipoIngresso: 0
        }
      ],
      tipoPagamento: 0
    };
    try {

      const response = await api.post("compras", data, {
        headers: {
          authorization: getToken()
        }
      },
      );
      window.location.href = response.data.code;
      history.push(response.data.code);
    } catch (ex) {
      alert(ex.response.data.message)
    }

  }

  return (
    <div className="formulario">
      <Form className="formularioCompra">

        <Label for="Nome" className="Nome text-light mt-3">Ingressos Inteira</Label>
        <Input type="select" onChange={value => setQtdInteira(value.target.value)}>
          <option value>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>

        <Label for="Nome" className="Nome text-light mt-3">Ingressos meio</Label>
        <Input type="select" onChange = {value => setQtdMeia(value.target.value)}>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
        </Input>

        <Button color="danger" className="button mt-3"  onClick={click}>Compre já</Button>

      </Form>
      </div>
   

    
  );
}

export default Example;