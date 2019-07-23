import React from "react";
import { Icon, Menu, Header } from "semantic-ui-react";

const Footer = () => (
  <Menu fixed="bottom" inverted textAlign="center" widths="20" size="large">
    <Header as="h3" color="pink" textAlign="center" style={{ marginTop: 8 }}>
      Find your SuperHero
      <Icon name="heart" style={{ marginLeft: "5px" }} />
    </Header>
  </Menu>
);

export default Footer;
