import React, { Fragment } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from "react-router";
import CardsCharacters from './CardsCharacters';
import Pagination from './Pagination';
import LateralBar from './LateralBar';

class Home extends React.Component {
  state = {
    content: [],
    activeItem: 'home',
    gender: '',
    activePage: 1,
    cardPerPage: 12,
    hair: '',
    eye: '',
    hobbies: '',

  }

  componentDidMount() {
    axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(resp => (resp.data))
      .then(data => this.setState({ content: data }))

  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });


  toggleChange = (event, { value }) => {
    this.setState({ gender: value });
  }
  toggleHair = (event, { value }) => {
    this.setState({ hair: value });
  }
  toggleEye = (event, { value }) => {
    this.setState({ eye: value });
  }

  render() {
    const { content, activePage, cardPerPage, gender, hair, eye } = this.state;
    const indexOfLastCard = activePage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentContent = content.slice(indexOfFirstCard, indexOfLastCard)
    return (

      <Fragment>
        <Container style={{ marginTop: '8.5rem', textAlign: 'center' }} fluid>
          <Grid>
            <Grid.Column width={4}>
              <LateralBar
                toggleChange={this.toggleChange}
                gender={gender}
                hair={hair}
                toggleHair={this.toggleHair}
                toggleEye={this.toggleEye} />
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Pagination
                contentLength={content.length}
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
                cardPerPage={cardPerPage}
              />
              <CardsCharacters
                content={currentContent}
                gender={gender}
                hair={hair}
                eye={eye} />
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(Home);
