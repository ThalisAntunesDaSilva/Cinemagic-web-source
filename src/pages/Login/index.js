import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import api from '../../services/api';
import './styles.css';
import jwt from 'jwt-decode'
import {login,getToken} from '../../services/auth/auth.js';

import formularioLogin from '../../components/formularioLogin/index.js';



export default function Login(){
    
    let history = useHistory()
    
    const [erroLogin,setErroLogin] = useState("");
  
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');


    async function AcaoBotao (e){
        e.preventDefault();
       try{
            const res = await api.post("/login", {
                "email": email,
                "senha": senha
            })
            const token = res.headers["authorization"]   
            const decoded = jwt(token)
            login(token);
            alert(getToken());
            const clientRes = await api.get("/clientes",{
                params:{
                    email:decoded
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
        <>

       
<div className="corpo">

         {formularioLogin()}
         </div>



        </>
    );





}