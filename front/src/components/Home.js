import React, { Fragment } from 'react';
import axios from 'axios';
import CardsCharacters from './CardsCharacters';
import Pagination from './Pagination';


class Home extends React.Component {
  state = {
    content: [],
    activePage: 1,
    cardPerPage: 12,
  }

  componentDidMount() {
    axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(resp => (resp.data))
      .then(data => this.setState({ content: data }))
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { content, activePage, cardPerPage } = this.state;
    const indexOfLastCard = activePage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentContent = content.slice(indexOfFirstCard, indexOfLastCard)
    return (
      <Fragment>
        <Pagination
          contentLength={content.length}
          activePage={activePage}
          onPageChange={this.handlePaginationChange}
          cardPerPage={cardPerPage}
        />
        <CardsCharacters content={currentContent} />
      </Fragment>
    );
  }
}

export default Home;