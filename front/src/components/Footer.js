import React from "react";
import { Segment, Container, Icon } from "semantic-ui-react";

const Footer = () => (
  <Segment inverted>
    <Container textAlign="center">
      Find your SuperHero
      <Icon name="heart" style={{ marginLeft: "5px" }} />
    </Container>
  </Segment>
);

export default Footer;
