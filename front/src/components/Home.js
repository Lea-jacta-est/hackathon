import React from 'react';
import axios from 'axios';
import CardsCharacters from './CardsCharacters';


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

      <CardsCharacters content={content} />
    );
  }
}

export default Home;