import React from 'react';
import axios from 'axios';
import CardsCharacters from './CardsCharacters';
import { Container, Grid } from 'semantic-ui-react';
import LateralBar from './LateralBar';

class Home extends React.Component {
  state = {
    content: []
  }


  componentDidMount() {
    axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(resp => (resp.data))
      .then(data => this.setState({ content: data }))
  }


  render() {
    const { content } = this.state;
    return (
      <Container fluid>
        <Grid>
          <Grid.Column width={4}>
            <LateralBar />
          </Grid.Column>
          <Grid.Column width={10}>
            <CardsCharacters content={content} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Home;