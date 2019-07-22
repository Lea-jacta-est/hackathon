import React, { useState } from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import axios from "axios";
import NavBarProfile from "./NavbarProfile";
import { Radar } from "react-chartjs-2";

const HeroProfil = props => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const { id } = props.match.params;
    const fetchData = async () => {
      const result = await axios(`/api/superheros/${id}`);
      setData(result.data[0]);
    };
    fetchData();
  }, [props.match.params]);

  const stat = {
    labels: [
      "Intelligence",
      "Combat",
      "Durability",
      "Power",
      "Speed",
      "Strength"
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "#ee0f7e",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [
          data.intelligence,
          data.combat,
          data.durability,
          data.power,
          data.speed,
          data.strength
        ]
      }
    ]
  };

  return (
    <Container style={{ marginTop: "8.5rem", textAlign: "center" }} fluid>
      <NavBarProfile />

      <Grid.Column width={12}>
        <h1>{data.name}</h1>
        <Image src={data.imageLg} centered />
        <Radar data={stat} />

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
  );
};

export default HeroProfil;
