import React, { Fragment } from 'react';
import axios from 'axios';
import CardsCharacters from './CardsCharacters';
import { Container, Grid, Menu, Dropdown } from 'semantic-ui-react';
import LateralBar from './LateralBar';
import logo from './image/logo.png';

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
    const { content, activeItem } = this.state;
    return (
      <Fragment>
        <Menu inverted size='massive' fixed="top">
          <Menu.Item header>
            <img src={logo} alt='logo'>
            </img>
          </Menu.Item>
          <Menu.Item name='home' color="pink" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            color="pink"
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            color="pink"
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Dropdown color="pink" item text='Category'>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
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
