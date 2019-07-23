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
    fav: [],
    isFiltered: true,
    count: 0
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
  toggleCrush = (event, { value }) => {
    this.props.history.push(`/profil-hero/${value}`);
  };

  handleSearch = e => {
    this.setState({ search: e.target.value, isFiltered: true });
  };

  addTomonAubergine = id => {
    const newFav = this.state.fav;
    newFav.push(id);
    this.setState({ fav: newFav });
    this.inc1();
  };

  handleResetFilters = () => {
    this.setState(prevState => ({
      isFiltered: !prevState.isFiltered,
      activePage: 1,
      gender: "",
      hair: "",
      eye: ""
    }));
  };

  inc1 = () => {
    this.notifyInc(1);
  }

  notifyInc = (n) => {
    let count = this.state.count + n;
    if (count < 0) { count = 0 };
    this.setState({
      count: count
    });
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
      isFiltered,
      count
    } = this.state;

    let filteredContent =
      content &&
      content
        .filter(character => character.gender.includes(gender))
        .filter(character => character.hairColor.includes(hair))
        .filter(character => character.eyeColor.includes(eye))
        .filter(character => character.name.toLowerCase().includes(search));

    if (!isFiltered) {
      filteredContent = content;
    }

    const indexOfLastCard = activePage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentContent = filteredContent.slice(
      indexOfFirstCard,
      indexOfLastCard
    );

    return (
      <Fragment>
        <Navbar
          content={this.state.content}
          handleSearch={this.handleSearch}
          listOfFav={this.state.fav}
          toggleCrush={this.toggleCrush}
          count={count}
        />
        <Container style={{ marginTop: "8.5rem", textAlign: "center", marginBottom: 100 }} fluid>
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
