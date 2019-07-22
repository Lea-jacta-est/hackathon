import React, { useState } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';



const HeroProfil = (props) => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const { id } = props.match.params;
    const fetchData = async () => {
      const result = await axios(
        `https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
      );
      setData(result.data);
    };
    fetchData();
  }, [props.match.params]);

  return (
    <Container style={{ marginTop: '8.5rem', textAlign: 'center' }} fluid>
      <Grid.Column width={12}>
        <h1>{data.name}</h1>
        <Image src={data.images && data.images.lg} centered />
        <h1>Intelligence</h1>
        <StarRatings
          rating={data.powerstats && data.powerstats.intelligence * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='intelligence'
        />
        <h1>Combat</h1>
        <StarRatings
          rating={data.powerstats && data.powerstats.combat * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='combat'
        />
        <h1>Durability</h1>
        <StarRatings
          rating={data.powerstats && data.powerstats.durability * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='durability'
        />
        <h1>Power</h1>
        <StarRatings
          rating={data.powerstats && data.powerstats.power * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='power'
        />
        <h1>Speed</h1>
        <StarRatings
          rating={data.powerstats && data.powerstats.speed * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='speed'
        />
        <h1>Strength</h1>
        <StarRatings
          rating={data.powerstats && data.powerstats.strength * 5 / 100}
          starRatedColor="orange"
          numberOfStars={5}
          name='strength'
        />
        <h1>{data.appearance && data.appearance.gender}</h1>
        <h1>{data.appearance && data.appearance.race}</h1>
        <h1>{data.appearance && data.appearance.height[1]}</h1>
        <h1>{data.appearance && data.appearance.weight[1]}</h1>
        <h1>{data.appearance && data.appearance.eyeColor}</h1>
        <h1>{data.appearance && data.appearance.hairColor}</h1>
        <h1>{data.biography && data.biography.fullName}</h1>
        <h1>{data.biography && data.biography.placeOfBirth}</h1>
        <h1>{data.biography && data.biography.alignment}</h1>
        <h1>{data.work && data.work.occupation}</h1>
        <h1>{data.work && data.work.base}</h1>
        <h1>{data.connections && data.connections.groupAffiliation}</h1>
        <h1>{data.connections && data.connections.relatives.split("?").join('-')}</h1>
      </Grid.Column>
    </Container>
  )
}

export default HeroProfil;

