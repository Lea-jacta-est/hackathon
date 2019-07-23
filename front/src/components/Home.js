import React, { Fragment } from "react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router";
import CardsCharacters from "./CardsCharacters";
import Paginate from "./Pagination";
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
    isFiltered: true
  };

  componentDidMount() {
    axios
      .get("/api/superheros")
      .then(resp => resp.data)
      .then(data => this.setState({ content: data }));
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  toggleHair = (event, { value }) => {
    this.setState({ hair: value, isFiltered: true });
  };
  toggleEye = (event, { value }) => {
    this.setState({ eye: value, isFiltered: true });
  };
  toggleGender = (event, { value }) => {
    this.setState({ gender: value, isFiltered: true });
  };

  handleSearch = e => {
    this.setState({ search: e.target.value, isFiltered: true });
  };

  handleResetFilters = () => {
    this.setState(prevState => ({
      isFiltered: !prevState.isFiltered,
      activePage: 1,
      gender: "",
      hair: "",
      eye: ""
    }));
  }

  render() {
    const {
      content,
      activePage,
      cardPerPage,
      gender,
      hair,
      eye,
      search,
      isFiltered
    } = this.state;

    let filteredContent = content && content
      .filter(character => character.gender.includes(gender))
      .filter(character => character.hairColor.includes(hair))
      .filter(character => character.eyeColor.includes(eye))
      .filter(character => character.name.toLowerCase().includes(search));

    if (!isFiltered) {
      filteredContent = content
    };

    const indexOfLastCard = activePage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentContent = filteredContent.slice(indexOfFirstCard, indexOfLastCard);

    return (
      <Fragment>
        <Navbar handleSearch={this.handleSearch} />
        <Container style={{ marginTop: "8.5rem", textAlign: "center" }} fluid>
          <Grid>
            <Grid.Column width={3}>
              <LateralBar
                toggleGender={this.toggleGender}
                gender={gender}
                hair={hair}
                eye={eye}
                toggleHair={this.toggleHair}
                toggleEye={this.toggleEye}
                resetFilters={this.handleResetFilters}
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <Paginate
                contentLength={filteredContent.length}
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
