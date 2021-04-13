import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, CardSubtitle } from 'reactstrap';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Example = (props) => {
  const history = useHistory();
  const [sessao, setSessao] = useState([]);
  const token = localStorage.getItem('token');
  const [id, setId] = useState('');

  
  const encaminhaCompraSessao =  ses => async e =>{

    try {
      localStorage.setItem('sessaoAtual', JSON.stringify(ses));
      history.push('/Compra');
    } catch (err) {
      alert(err);
    }
  }
  

  async function getApi() {
    try {
      const res = await api.get("sessoes")
      setSessao(res.data)

    } catch (ex) {
      alert(ex)
    }
  }


  useEffect(() => {
    getApi()
  }, [token])


  return (

    <div className="body-section">
      <ul>
        <h1 className="title">Sessões</h1>
        {sessao.map(ses => (
          <li key={ses.id}>
            <Jumbotron>
            <CardSubtitle tag="h2" className="mb-2 text-muted">
            {ses.sala.cinema.cidade.nome}-{ses.sala.cinema.cidade.estado.uf}
              
              
              </CardSubtitle>
         
              <p className="lead">Confira as sessões disponíveis</p>
              <div className="section">
                <div>
                  <strong>Número da Sala: </strong>
                  <p className="test">{ses.sala.numero}</p>
                  <strong>Capacidade: </strong>
                  <p className="test">{ses.sala.capacidade}</p>

                  <strong>Filme: </strong>
                  <p className="test">{ses.filme.titulo}</p>
                  <img src={ses.filme.pathImage} />
                  <strong>Duração: </strong>
                  <p className="test">{ses.filme.duracao}</p>
                  <strong>Gênero: </strong>
                  <p className="test">{ses.filme.genero.descricao}</p>
                  <strong>Data : </strong>
                  <p className="test">{ses.data}</p>
                  <strong>Hora : </strong>
                  <p className="test">{ses.hora}</p>
                </div>

                <div>

                  <strong> Valor Inteira: </strong>
                  <p className="display-4">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ses.valorInteira)}</p>
                  <strong> Valor Meia: </strong>
                  <p className="display-4">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ses.valorMeia)}</p>

                  <Button color="danger" onClick = {encaminhaCompraSessao(ses)}>Comprar</Button>
                </div>
              </div>


            </Jumbotron>



          </li>

        ))}

      </ul>






    </div>
  );
};

export default Example;