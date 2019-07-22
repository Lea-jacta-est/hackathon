import React, { useState } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import NavBarProfile from './NavbarProfile'



const HeroProfil = (props) => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const { id } = props.match.params;
    const fetchData = async () => {
      const result = await axios(
        `/api/superheros/${id}`
      );
      setData(result.data[0]);
    };
    fetchData();
  }, [props.match.params]);

  return (
    <Container style={{ marginTop: '8.5rem', textAlign: 'center' }} fluid>
      <NavBarProfile />

      <Grid.Column width={12}>
        <h1>{data.name}</h1>
        <Image src={data.imageLg} centered />
        <h1>Intelligence</h1>
        <StarRatings
          rating={data.intelligence && data.intelligence * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='intelligence'
        />
        <h1>Combat</h1>
        <StarRatings
          rating={data.combat && data.combat * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='combat'
        />
        <h1>Durability</h1>
        <StarRatings
          rating={data.durability && data.durability * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='durability'
        />
        <h1>Power</h1>
        <StarRatings
          rating={data.power && data.power * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='power'
        />
        <h1>Speed</h1>
        <StarRatings
          rating={data.speed && data.speed * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='speed'
        />
        <h1>Strength</h1>
        <StarRatings
          rating={data.strength && data.strength * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='strength'
        />
        <h1>{data.gender}</h1>
        <h1>{data.race}</h1>
        <h1>{data.height}</h1>
        <h1>{data.weight}</h1>
        <h1>{data.eyeColor}</h1>
        <h1>{data.hairColor}</h1>
        <h1>{data.fullName}</h1>
        <h1>{data.placeOfBirth}</h1>
        <h1>{data.alignment}</h1>
        <h1>{data.occupation}</h1>
        <h1>{data.base}</h1>
        <h1>{data.groupAffiliation}</h1>
        <h1>{data.relatives}</h1>
      </Grid.Column>
    </Container>
  )
}

export default HeroProfil;

