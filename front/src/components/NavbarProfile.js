import React, { Fragment } from "react";
import { Menu, Dropdown, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./image/logo.png";

class Navbar extends React.Component {
  state = {
    content: [],
    activeItem: "home"
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;
    return (
      <Fragment>
        <Menu fixed="top" inverted size="massive">
          <Menu.Item header>
            <Link to="/home">
              <Header as="h1" color="pink">
                <img src={logo} alt="logo" />
                AubergeMoi.com
              </Header>
            </Link>
          </Menu.Item>
          <Dropdown color="pink" item text="Category">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            <Menu.Item color="pink" name="Logout">
              <Link to="/">Logout</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Fragment>
    );
  }
}

export default Navbar;
