import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../services/api';
import jwt from 'jwt-decode';
import {login,getToken} from '../../services/auth/auth.js';



const Example = (props) => {
  let history = useHistory()
  const [erroLogin,setErroLogin] = useState("");
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');



  async function acaoBotao (e){
    e.preventDefault();
   try{
        const res = await api.post("/login", {
            "email": email,
            "senha": senha
        })
        const token = res.headers["authorization"]   
        const decoded = jwt(token)
        login(token);
        const clientRes = await api.get("/clientes",{
            params:{
                email: decoded.sub
            },
            headers:{
                authorization: getToken()
            }
        })
        localStorage.setItem('cliente',JSON.stringify(clientRes.data))
        history.push("/")
    }catch(ex){
        setErroLogin(ex.response.data.message)
        
        alert(ex.response.data.message)
    }
  }
 
 
 
  return (
          <Form column>
    
      <FormGroup className="oi mb-2 me-sm-2 mb-sm-0 ">
    
        <Label for="exampleEmail" className="me-sm-2 mt-3 text-light">Email</Label>
        <Input className="input mt-3"type="email" name="email" onChange={e => setEmail(e.target.value)} id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label for="examplePassword" className="me-sm-2 mt-3 text-light">Senha</Label>
        <Input className="input mt-3"type="password" name="password" onChange={e => setSenha(e.target.value)} id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button color="danger" className="button mt-3" onClick={acaoBotao}>Login</Button>
  
    </Form>
  
  
  );
}

export default Example;