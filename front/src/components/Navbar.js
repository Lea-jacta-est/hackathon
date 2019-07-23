import React, { Fragment } from "react";
import { Menu, Dropdown, Header, Input, Icon, Select } from "semantic-ui-react";
import { Link } from "react-router-dom";

import logo from "./image/logo.png";





class Navbar extends React.Component {
  state = {
    content: [],
    activeItem: "home"
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { handleSearch, listOfFav, toggleCrush, content } = this.props;

    const { activeItem } = this.state;

    const ScrollingFav =
      listOfFav.map(item => {
        const TOTO = {}

        TOTO.key = content[item - 1].name;
        TOTO.value = content[item - 1].id;
        TOTO.text = content[item - 1].name;
        TOTO.image = content[item - 1].imageXs

        return TOTO


      });

    return (
      <Fragment>
        <Menu fixed="top" inverted size="massive">
          <Menu.Item header>
            <Link to="/">
              <Header as="h1" color="pink">
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
          <Dropdown color="pink" item text="Category">
            <Dropdown.Menu>
              <Dropdown.Item>Popular</Dropdown.Item>
              <Dropdown.Item>Most View</Dropdown.Item>
              <Dropdown.Item>Amateur</Dropdown.Item>
              <Dropdown.Item>Quic'n'Dirty</Dropdown.Item>
              <Dropdown.Item>Open Source in your Area</Dropdown.Item>


            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Icon
              style={{ marginTop: '1rem', minWidth: 'auto', color: 'pink' }}
              name='shopping basket'
              aria-label="My basket"
              size="large"
            />
            <Select
              onChange={toggleCrush}
              color="pink"
              options={ScrollingFav}
              placeholder="My Crush"


            />
          </Menu.Item>


          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Fragment >
    );
  }
}

export default Navbar;
