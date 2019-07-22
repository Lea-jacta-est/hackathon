import React, { Fragment } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';
import CardsCharacters from './CardsCharacters';
import Pagination from './Pagination';
import LateralBar from './LateralBar';
import Navbar from './Navbar';

class Home extends React.Component {
  state = {
    content: [],
    activeItem: 'home',
    gender: '',
    activePage: 1,
    cardPerPage: 12,
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

  render() {
    const { content, activePage, cardPerPage, gender } = this.state;
    const indexOfLastCard = activePage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentContent = content.slice(indexOfFirstCard, indexOfLastCard)

    let hairColor = content
      .map(color => (color.appearance.hairColor));
    let arrhairColor = hairColor
      .reduce((arrhairColor, item) => {
        return arrhairColor
          .includes(item) ? arrhairColor : arrhairColor.concat([item]);
      }, [])
      .map(color => <div>{color}</div>)

    let eyeColor = content
      .map(color => (color.appearance.eyeColor));
    let arreyeColor = eyeColor
      .reduce((arreyeColor, item) => {
        return arreyeColor
          .includes(item) ? arreyeColor : arreyeColor.concat([item]);
      }, [])
      .map(color => <div>{color}</div>)


    return (

      <Fragment>
        <Navbar />
        <Container style={{ marginTop: '8.5rem' }} fluid>
          <Grid>
            <Grid.Column width={4}>
              <LateralBar toggleChange={this.toggleChange} gender={gender} />
            </Grid.Column>
            <Grid.Column width={10}>
              <Pagination
                contentLength={content.length}
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
                cardPerPage={cardPerPage}
              />
              <CardsCharacters content={content} gender={gender} />
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
