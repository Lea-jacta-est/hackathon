import React from "react";
import { Card, Icon, Image, Container, Grid, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CardsCharacters = ({ content, gender, hair, eye, search, id }) => (
  <Container style={{ marginTop: "4.5rem" }}>
    <Grid columns={4}>
      {content &&
        content
          .filter(character => character.gender.includes(gender))
          .filter(character => character.hairColor.includes(hair))
          .filter(character => character.eyeColor.includes(eye))
          .filter(character => character.name.toLowerCase().includes(search))
          .map(character => (
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
