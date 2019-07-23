import React, { Fragment } from 'react';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";
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
            <Link to="/">
              <Header as='h1' color='pink'>
                <img src={logo} alt="logo" />
                sitePasPorno.com
                </Header>
            </Link>
          </Menu.Item>
          <Menu.Item
            color="pink"
            name="Sign Up"
            active={activeItem === "Sign Up"}
            onClick={this.handleItemClick}
          />
          <Dropdown color="pink" item text='Category'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Fragment>
    );
  }
}

export default Navbar;
