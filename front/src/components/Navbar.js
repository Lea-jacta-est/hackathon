import React, { Fragment  } from 'react';
import { Menu, Dropdown, Header, Input } from 'semantic-ui-react';
import logo from './image/logo.png';

class Navbar extends React.Component {
    state = {
        content: [],
        activeItem: 'home'
      }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (

      <Fragment>
        <Menu fixed="top" inverted size='massive'>
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
      </Fragment>
    );
  }
}

export default Navbar;
