import React from 'react';
import { Card, Icon, Image, Container, Grid } from 'semantic-ui-react'

const CardsCharacters = ({ content }) => (

  <Container>
    <Grid>
      {content && content.map((character) =>
        <Card key={character.id}>
          <Image src={character.images.md} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{character.name}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
                </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='user' />
            22 Friends
              </Card.Content>
        </Card>
      )}
    </Grid>
  </Container>
);


export default CardsCharacters;