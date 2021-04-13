import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">Preços e filmes especiais</CardTitle>
        <CardText>Confira na sua cidade ou próximo</CardText>
        <Button color="danger">Compre já</Button>
      </Card>
 
    </div>
  );
};

export default Example;