import React from 'react';
import fotoCard1 from '../../assets/fotoCard1.jpg';
import fotoCard2 from '../../assets/fotoCard2.jpg';
import fotoCard3 from '../../assets/fotoCard3.jpg';

import './styles.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const Example = (props) => {
  return (
    <CardGroup  className="card-group bg-dark">
      <Card  className="card bg-dark text-light">
        <CardImg className="card-image" top width="100%"  height="57%" src={fotoCard2} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Alegrete-RS</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Cinemas aberto</CardSubtitle>
          <CardText>Filmes inéditos em cartaz confira!</CardText>
          <Button color="danger">Compre agora</Button>
        </CardBody>
      </Card>
      <Card className="card bg-dark text-light">
        <CardImg top width="100%" src={fotoCard3} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Florianópolis-SC</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Filmes saindo de cartaz, não perca</CardSubtitle>
          <CardText>Vingadores, Harry</CardText>
          <Button color="danger">Confira o cartaz</Button>
        </CardBody>
      </Card>
      <Card className="card bg-dark text-light">
        <CardImg top width="100%" src={fotoCard1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Porto Alegre-RS</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Promoção Fidelidade</CardSubtitle>
          <CardText>Traga sua família e veja os melhores filmes com pontos de fidelidade</CardText>
          <Button color="danger">Resgatar pontos</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Example;
