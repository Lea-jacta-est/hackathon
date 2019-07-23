import React, { useState } from "react";
import {
  Grid,
  Image,
  Container,
  Segment,
  Table,
  Header,
  Button,
  Icon
} from "semantic-ui-react";
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

  const sendMail = async (e) => {
    e.preventDefault();
    await axios.post('/send/')
      .then(function (response) {
        console.log(response);
      })w
        .catch(function (error) {
          console.log(error);
        });
  };


  const options = {
    legend: {
      display: false
    }
  };

  return (
    <Container style={{ marginTop: "8.5rem", textAlign: "center" }} fluid>
      <NavBarProfile />

      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Image
              bordered
              ui
              src={data.imageLg}
              style={{ width: 400, margin: "auto" }}
              centered
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1" color="back" style={{ marginBottom: -10 }}>
              {data.fullName} alias {data.name}
            </Header>
            <Header as="h2" color="back" style={{ marginBottom: -10 }}>
              {data.gender} {data.race}
            </Header>
            <Table color="pink">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    alignment: {data.alignment}
                  </Table.HeaderCell>
                  <Table.HeaderCell>base: {data.base}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Height: {data.height}</Table.Cell>
                  <Table.Cell>Weight: {data.weight}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Hair color: {data.hairColor}</Table.Cell>
                  <Table.Cell>Eye color: {data.eyeColor}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Segment>
              <Radar data={stat} options={options} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as="h3" color="back" textAlign="left">
                Occupation:
                <br />
                {data.occupation}
              </Header>
            </Segment>
            <Segment>
              <Header as="h3" color="back" textAlign="left">
                Place Of Birth:
                <br />
                {data.placeOfBirth}
              </Header>
            </Segment>
            <Segment>
              <Header as="h3" color="back" textAlign="left">
                Groups:
                <br />
                {data.groupAffiliation}
              </Header>
            </Segment>
            <Segment>
              <Header as="h3" color="back" textAlign="left">
                Relatives:
                <br />
                {data.relatives}
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Button color="pink" style={{ margin: "auto" }}>
          <Icon name="mail" type="submit" onClick={sendMail} />
          Send message
        </Button>
      </Grid>
    </Container>
  );
};

export default HeroProfil;
