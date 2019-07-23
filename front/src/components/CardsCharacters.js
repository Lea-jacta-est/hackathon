import React from "react";
import {
  Card,
  Icon,
  Image,
  Container,
  Grid,
  List,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CardsCharacters = ({
  content,
  gender,
  hair,
  eye,
  search,
  id,
  addTomonAubergine
}) => (
  <Container style={{ marginTop: "4.5rem" }}>
    <Grid columns={4}>
      {content &&
        content.map(character => (
          <Grid.Column>
            <Card key={character.id} wrapped ui={false}>
              <Link to={`/profil-hero/${character.id}`}>
                <Image src={character.imageMd} wrapped ui={true} />
              </Link>
              <Card.Content>
                <Card.Header>{character.name}</Card.Header>
                <Card.Meta>
                  <span className="date"> {character.placeOfBirth}</span>
                </Card.Meta>
                <Card.Description>
                  <List>
                    <List.Item>
                      <Icon disabled name="non binary transgender" />{" "}
                      {character.gender}
                    </List.Item>
                    <List.Item>
                      <Icon disabled name={character.race ? "male" : " "} />{" "}
                      {character.race}
                    </List.Item>
                    <List.Item>
                      <Icon
                        disabled
                        name={
                          character.alignment === "good"
                            ? "smile"
                            : "frown outline"
                        }
                      />{" "}
                      {character.alignment}
                    </List.Item>
                    <Button
                      style={{ margin: "auto" }}
                      icon
                      labelPosition="left"
                      color="pink"
                      onClick={() => addTomonAubergine(character.id)}
                    >
                      <Icon name="heart" />
                      Add to my basket
                    </Button>
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
    </Grid>
  </Container>
);

export default withRouter(CardsCharacters);
