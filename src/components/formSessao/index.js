import React, { useState } from 'react';
import { Form, Input, Label, Button } from 'reactstrap';
import api from '../../services/api';
import { getToken } from '../../services/auth/auth'
import { useHistory } from 'react-router-dom';
import './styles.css';



const Example = (props) => {
  const history = useHistory();
  const [sessao,setSessao] = useState([]);
  const [dataa,setDataa] = useState('');
  const [hora,setHora] = useState('');
  const [valorInteira,setValorInteira] = useState('');
  const [valorMeia,setValorMeia] = useState('');
  const [situacao,setSituacao] = useState([]);
  const [valeCupons,setValeCupons] = useState([]);
  const [valorCupons,setValorCupons] = useState('');
  const [filmes,setFilmes] = useState([]);
  const [sala,setSalas] = useState([]);
  const [pais,setPais] = useState([]);
  const [estado,setEstado] = useState([]);
  const [cidade,setCidade] = useState([]);

  
  async function click(e) {
   e.preventDefault();
    
    const data = {
       "data": dataa,
        "hora": hora,
        "valorInteira": valorInteira,
        "valorMeia": valorMeia,
        "sessaoEncerrada": situacao,
        "trocaPorCupons": valeCupons,
        "valorEmCupons": valorCupons,
        "filmeId": 1,
        "salaId": 1
       };
    try {
    const response = await api.post("sessoes", data, 
    {headers: {authorization: getToken()}});
     
    alert (`sucesso: ${response.status}`);

     
    } catch (ex) {
      alert(ex.response.data.message)
    }

  }

  return (
      <Form>
   <h1>Insira os dados da sessão</h1>
      <div className="formularioDeSessao">
   
        <div className="lado1">
      <Label for="Nome" type="date" size="5" className="Nome text-light mt-3 w-25">Data</Label>
      <Input                onChange = {e => setDataa(e.target.value)}/>
        
        <Label for="Nome" className="Nome text-light mt-3">Hora</Label>
        <Input size="md" onChange = {e => setHora(e.target.value)}/>

        <Label for="Nome" className="Nome text-light mt-3">Valor Inteira</Label>
        <Input onChange = {e => setValorInteira(e.target.value)}/>

        <Label for="Nome" className="Nome text-light mt-3">Valor Meia</Label>
        <Input onChange = {e => setValorMeia(e.target.value)}/>

        <Label for="Nome" className="Nome text-light mt-3">Valor em pontos</Label>
        <Input onChange = {e => setValorCupons(e.target.value)}/>
        </div>
        <div className="lado2">
        <Label for="Nome" className="Nome text-light mt-3">Filmes em cartaz</Label>
        <Input  onChange = {e => setFilmes(e.target.value)}>
          
        </Input>

        <Label for="Nome" className="Nome text-light mt-3">Número Sala</Label>
        <Input  onChange = {e => setSalas(e.target.value)}>
      
        </Input>

        <Label for="Nome" className="Nome text-light mt-3">Filmes em cartaz</Label>
        <Input type="select">
          <option value = "1">Homem Aranha</option>
        </Input>
        <Button color="danger" className="mt-5" onClick={click}>Cadastrar</Button>
        </div>
        

      </div>

      
     </Form> 
    
  );
}

export default Example;