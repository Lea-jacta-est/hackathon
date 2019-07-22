import React from 'react';
import { Card, Icon, Image, Container, Grid, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";


const CardsCharacters = ({ content, id }) => (

  <Container style={{ marginTop: '4.5rem' }}>
    <Grid>
      {content && content.map((character) =>
        <Card key={character.id}>
          <Link
            to={`/profil-hero/${character.id}`}
          >
            <Image src={character.images.md} wrapped ui={false} />
            <Card.Content >
              <Card.Header>{character.name}</Card.Header>
              <Card.Meta>
                <span className='date'> {character.biography.placeOfBirth}</span>
              </Card.Meta>
              <Card.Description>
                <List>
                  <List.Item>
                    <Icon disabled name='non binary transgender' /> {character.appearance.gender}
                  </List.Item>
                  <List.Item>
                    <Icon disabled name={character.appearance.race ? 'male' : " "} />  {character.appearance.race}
                  </List.Item>
                  <List.Item>
                    <Icon disabled name={character.biography.alignment === "good" ? 'smile' : 'frown outline'} /> {character.biography.alignment}
                  </List.Item>
                </List>
              </Card.Description>
            </Card.Content>
          </Link>

        </Card>
      )}
    </Grid>

  </Container >
);


export default withRouter(CardsCharacters);