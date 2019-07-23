import React, { Fragment } from "react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router";
import CardsCharacters from "./CardsCharacters";
import Pagination from "./Pagination";
import LateralBar from "./LateralBar";
import Navbar from "./Navbar";

class Home extends React.Component {
  state = {
    content: [],
    activeItem: "home",
    gender: "",
    activePage: 1,
    cardPerPage: 12,
    hair: "",
    eye: "",
    hobbies: "",
    search: ""
  };

  componentDidMount() {
    axios
      .get("/api/superheros")
      .then(resp => resp.data)
      .then(data => this.setState({ content: data }));
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  toggleChange = (event, { value }) => {
    this.setState({ gender: value });
  };
  toggleHair = (event, { value }) => {
    this.setState({ hair: value });
  };
  toggleEye = (event, { value }) => {
    this.setState({ eye: value });
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const {
      content,
      activePage,
      cardPerPage,
      gender,
      hair,
      eye,
      search
    } = this.state;
    const indexOfLastCard = activePage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentContent = content.slice(indexOfFirstCard, indexOfLastCard);

    // let hairColor = content
    //   .map(color => (color.appearance.hairColor));
    // let arrhairColor = hairColor
    //   .reduce((arrhairColor, item) => {
    //     return arrhairColor
    //       .includes(item) ? arrhairColor : arrhairColor.concat([item]);
    //   }, [])
    //   .map(color => <div>{color}</div>)

    // let eyeColor = content
    //   .map(color => (color.appearance.eyeColor));
    // let arreyeColor = eyeColor
    //   .reduce((arreyeColor, item) => {
    //     return arreyeColor
    //       .includes(item) ? arreyeColor : arreyeColor.concat([item]);
    //   }, [])
    //   .map(color => <div>{color}</div>)

    return (
      <Fragment>
        <Navbar handleSearch={this.handleSearch} />
        <Container style={{ marginTop: "8.5rem", textAlign: "center" }} fluid>
          <Grid>
            <Grid.Column width={4}>
              <LateralBar
                toggleChange={this.toggleChange}
                gender={gender}
                hair={hair}
                toggleHair={this.toggleHair}
                toggleEye={this.toggleEye}
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <Pagination
                contentLength={content.length}
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
                cardPerPage={cardPerPage}
              />
              <CardsCharacters
                content={currentContent}
                gender={gender}
                hair={hair}
                eye={eye}
                search={search}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(Home);
