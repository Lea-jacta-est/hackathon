import React, { Fragment  } from 'react';
import { Menu, Dropdown, Header, Input, Container, Grid } from 'semantic-ui-react';
import logo from './image/logo.png';
import axios from 'axios';
import CardsCharacters from './CardsCharacters';
import LateralBar from './LateralBar';

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
        <Menu fixted inverted size='massive'>
          <Menu.Item header>
                <Header as='h1' color='pink'>
                  <img src={logo} alt="logo"/> 
                   sitePasPorno.com
                </Header>
            </Menu.Item>
            <Menu.Item name='home' color="pink" active={activeItem === 'home'} onClick={this.handleItemClick} 
            />
            <Menu.Item
            color="pink"
            name='Friends'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            />
            <Dropdown color="pink" item text='Category'>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
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
