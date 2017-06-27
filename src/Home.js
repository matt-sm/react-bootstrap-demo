import React from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Home = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h1>Welcome to React</h1>
      </Grid>
    </Jumbotron>
    <Grid>
      <Button bsStyle="success" bsSize="large" href="/login">Login</Button>
    </Grid>
  </div>
)

export default Home;