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
    search: "",
    fav: []
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
  toggleGender = (event, { value }) => {
    this.setState({ gender: value });
  };
  toggleCrush = (event, { value }) => {
    this.props.history.push(`/profil-hero/${value}`)
  };


  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  addTomonAubergine = (id) => {
    const newFav = this.state.fav;
    newFav.push(id);
    this.setState({ fav: newFav })

  }

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

    return (
      <Fragment>
        <Navbar
          content={this.state.content}
          handleSearch={this.handleSearch}
          listOfFav={this.state.fav}
          toggleCrush={this.toggleCrush}
        />
        <Container style={{ marginTop: "8.5rem", textAlign: "center" }} fluid>
          <Grid>
            <Grid.Column width={3}>
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
                addTomonAubergine={this.addTomonAubergine}
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
