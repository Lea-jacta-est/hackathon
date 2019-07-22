import React, { Fragment  } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';
import CardsCharacters from './CardsCharacters';
import LateralBar from './LateralBar';
import Navbar from './Navbar';

class Home extends React.Component {
  state = {
    content: [],
    activeItem: 'home'
  }


  componentDidMount() {
    axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(resp => (resp.data))
      .then(data => this.setState({ content: data }))
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { content } = this.state;
    return (

      <Fragment>
        <Navbar />
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
      </Fragment>
    );
  }
}

export default Home;
