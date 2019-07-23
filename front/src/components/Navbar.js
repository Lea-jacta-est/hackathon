import React, { Fragment } from "react";
import { Menu, Dropdown, Header, Input, Icon, Select, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';

import logo from "./image/logo.png";

class Navbar extends React.Component {
  state = {
    content: [],
    activeItem: "home"
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { handleSearch, listOfFav, toggleCrush, content, count } = this.props;

    // const { activeItem } = this.state;

    const ScrollingFav = listOfFav.map(item => {
      const TOTO = {};

      TOTO.key = content[item - 1].name;
      TOTO.value = content[item - 1].id;
      TOTO.text = content[item - 1].name;
      TOTO.image = content[item - 1].imageXs;

      return TOTO;
    });

    return (
      <Fragment>
        <Menu fixed="top" inverted size="massive">
          <Menu.Item header>
            <Link to="/home">
              <Header as="h1" color="pink">
                <img src={logo} alt="logo" />
                AdoptAHeroe.com
              </Header>
            </Link>
          </Menu.Item>

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
            <Grid>
              <NotificationBadge count={count} effect={Effect.ROTATE_X} style={{ color: 'white', backgroundColor: '#ee0f7e' }} />
              <Icon
                style={{ marginTop: "1rem", minWidth: "auto" }}
                name="shopping basket"
                aria-label="My basket"
                size="large"
                color="pink"
              />
            </Grid>

            <Menu.Menu>
              <Menu.Item></Menu.Item>
            </Menu.Menu>
            <Select
              onChange={toggleCrush}
              color="pink"
              options={ScrollingFav}
              placeholder="My Crush"
            />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item color="pink" name="Logout">
              <Link to="/">Logout</Link>
            </Menu.Item>
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Fragment>
    );
  }
}

export default Navbar;
