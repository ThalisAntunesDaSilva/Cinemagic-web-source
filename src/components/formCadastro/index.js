import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';

const Example = (props) => {




    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [ddd, setDdd] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [cidades, setCidades] = useState([]);
    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const selectState = document.querySelector('#estado');

    function convertPhone(value) {
        setDdd(value.slice(0, 2));
        setTelefone(value.substring(2));
    }
    async function signup(e) {
        e.preventDefault()
        const nomeCompleto = nome + sobrenome;
        try {
            const response = await api.post("/clientes", {
                nome: nomeCompleto,
                email: email,
                senha: senha,
                cidadeId: cidade,
                areaCode: ddd,
                phone: telefone,
                cpf: cpf
            });
        } catch (ex) {
            alert(ex.response.data.message)
        }

    }
    async function getEstados() {
        try {
            const res = await api.get("estados");
            setEstados(res.data);

        } catch (e) {
            alert(e)
        }
    }
    async function getCidades() {
        try {
            const res = await api.get(`cidades/${estado}`);
            setCidades(res.data);
        } catch (e) {
            alert(e);
        }
    }




    useEffect(() => {
        getEstados();

    });


    return (
        <Form>
            <h1>Insira os dados do cliente</h1>
            <div className="layout">
                <div className="lado1">
                    <Label for="Nome" className="Nome">Nome</Label>
                    <Input type="text" name="nome" id="nome" placeholder="Primerio nome" onChange={e => setNome(e.target.value)} />

                    <Label for="Sobrenome" className="me-sm-2">Sobrenome</Label>
                    <Input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" onChange={e => setSobrenome(e.target.value)} />


                    <Label for="CPF" className="me-sm-2">CPF</Label>
                    <Input type="text" name="cpf" id="cpf" placeholder="CPF" onChange={e => setCpf(e.target.value)} />





                    <Label for="Celular" className="me-sm-2">Celular (DDD + Número)</Label>
                    <Input type="text" name="celular" id="celular" placeholder="Celular" onChange={e => convertPhone(e.target.value)} />

                </div>
                <div className="lado2">



                    <Label for="Estado" className="me-sm-2">Cidade</Label>
                    <select name="estado" id="estado" onChange={e => setCidade(e.target.value)} onClick = {getCidades}>
                        <option>Selecione um cidade</option>
                        {cidades.map(cidade => (
                            <option value={cidade.id}>{cidade.nome}</option>
                        ))}
                    </select>

                    <Label for="Estado" className="me-sm-2">Estado</Label>
                    <select name="estado" id="estado" onChange={e => setEstado(e.target.value)}>
                        <option>Selecione um estado</option>
                        {estados.map(estado => (
                            <option value={estado.id}>{estado.nome}</option>
                        ))}
                    </select>



                    <Label for="exampleEmail" className="me-sm-2">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />

                    <Label for="examplePassword" className="me-sm-2">Senha</Label>
                    <Input type="password" name="password" id="password" placeholder="********" onChange={e => setSenha(e.target.value)} />


                    <Button className="mt-5" color="danger" size="lg" block onClick={signup}>Cadastrar-se</Button>
                </div>   </div>
        </Form>


    );
}

export default Example;