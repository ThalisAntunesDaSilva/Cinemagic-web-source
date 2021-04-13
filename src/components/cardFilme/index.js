import hp from '../../assets/hp.png'
import './styles.css';
import React, { useState, useEffect } from 'react';      
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const sessao = JSON.parse(localStorage.getItem('sessaoAtual'));

const Example =  (props) => {
  const history = useHistory();
  const [pathImage, setPathImage] = useState([]);
 
  return (
    <div className="filmes">
  
      <Card>
        <CardBody>
          <CardSubtitle tag="h3" className="mb-2 text-muted">Filmes em sessão</CardSubtitle>
        <img width="60%" height="80%" src={sessao.filme.pathImage} alt="Card image cap" />
        <CardText>{sessao.filme.titulo}</CardText>
              
        </CardBody>
     
    
      </Card>
    </div>
  );
};

export default Example;