import React, { Fragment } from 'react'
import { Button, Form, Container, Grid } from 'semantic-ui-react';
import axios from 'axios';



class InscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      fullName: '',
      intelligence: '',
      strength: '',
      speed: '',
      combat: '',
      durability: '',
      power: '',
      race: '',
      gender: '',
      weight: '',
      height: '',
      eyeColor: '',
      hairColor: '',
      placeOfBirth: '',
      alignment: '',
      occupation: '',
      base: '',
      groupAffiliation: '',
      relatives: '',
      avatar: '',
    }
    this.postForm = this.postForm.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postForm(e) {
    e.preventDefault();
    const { name, fullName, intelligence, strength, speed, combat, durability, power,
      gender, race, weight, height, eyeColor, hairColor, placeOfBirth,
      alignment, occupation, base, groupAffiliation, relatives, avatar } = this.state;
    axios
      .post('/api/superheros', {
        name, fullName, intelligence, strength, speed, combat, durability, power,
        gender, race, weight, height, eyeColor, hairColor, placeOfBirth,
        alignment, occupation, base, groupAffiliation, relatives, imageLg: avatar,
      })
      .catch(err => err.message)
  };

  render() {
    return (
      <Fragment>
        <Container style={{ marginBottom: 100, textAlign: "center" }} fluid>
          <Grid>
            <Form>
              <Button type='submit' onClick={this.postForm}>Submit</Button>
              <Form.Field>
                <label>Name</label>
                <input
                  placeholder='Name'
                  value={this.state.name}
                  onChange={this.onChangeValue}
                  name="name"
                />
              </Form.Field>
              <Form.Field>
                <label>Full name</label>
                <input
                  placeholder='Full name'
                  value={this.state.fullName}
                  onChange={this.onChangeValue}
                  name="fullName"
                />
              </Form.Field>
              <Form.Field>
                <label>Intelligence</label>
                <input
                  placeholder='Intelligence'
                  value={this.state.intelligence}
                  onChange={this.onChangeValue}
                  name="intelligence"
                />
              </Form.Field>
              <Form.Field>
                <label>Strength</label>
                <input
                  placeholder='Strength'
                  value={this.state.strength}
                  onChange={this.onChangeValue}
                  name="strength"
                />
              </Form.Field>
              <Form.Field>
                <label>Speed</label>
                <input
                  placeholder='Speed'
                  value={this.state.speed}
                  onChange={this.onChangeValue}
                  name="speed"
                />
              </Form.Field>
              <Form.Field>
                <label>Combat</label>
                <input
                  placeholder='Combat'
                  value={this.state.combat}
                  onChange={this.onChangeValue}
                  name="combat"
                />
              </Form.Field>
              <Form.Field>
                <label>Durability</label>
                <input
                  placeholder='Durability'
                  value={this.state.durability}
                  onChange={this.onChangeValue}
                  name="durability"
                />
              </Form.Field>
              <Form.Field>
                <label>Power</label>
                <input
                  placeholder='Power'
                  value={this.state.power}
                  onChange={this.onChangeValue}
                  name="power"
                />
              </Form.Field>
              <Form.Field>
                <label>Race</label>
                <input
                  placeholder='Race'
                  value={this.state.race}
                  onChange={this.onChangeValue}
                  name="race"
                />
              </Form.Field>
              <Form.Field>
                <label>Gender</label>
                <input
                  placeholder='Gender'
                  value={this.state.gender}
                  onChange={this.onChangeValue}
                  name="gender"
                />
              </Form.Field>
              <Form.Field>
                <label>height</label>
                <input
                  placeholder='Height'
                  value={this.state.height}
                  onChange={this.onChangeValue}
                  name="height"
                />
              </Form.Field>
              <Form.Field>
                <label>weight</label>
                <input
                  placeholder='Weight'
                  value={this.state.weight}
                  onChange={this.onChangeValue}
                  name="weight"
                />
              </Form.Field>
              <Form.Field>
                <label>Eye Color</label>
                <input
                  placeholder='Eye Color'
                  value={this.state.eyeColor}
                  onChange={this.onChangeValue}
                  name="eyeColor"
                />
              </Form.Field>
              <Form.Field>
                <label>Hair Color</label>
                <input
                  placeholder='Hair Color'
                  value={this.state.hairColor}
                  onChange={this.onChangeValue}
                  name="hairColor"
                />
              </Form.Field>
              <Form.Field>
                <label>Place of birth</label>
                <input
                  placeholder='Place of birth'
                  value={this.state.placeOfBirth}
                  onChange={this.onChangeValue}
                  name="placeOfBirth"
                />
              </Form.Field>
              <Form.Field>
                <label>Alignment</label>
                <input
                  placeholder='Alignment'
                  value={this.state.alignment}
                  onChange={this.onChangeValue}
                  name="alignment"
                />
              </Form.Field>
              <Form.Field>
                <label>Occupation</label>
                <input
                  placeholder='Occupation'
                  value={this.state.occupation}
                  onChange={this.onChangeValue}
                  name="occupation"
                />
              </Form.Field>
              <Form.Field>
                <label>Base</label>
                <input
                  placeholder='Base'
                  value={this.state.base}
                  onChange={this.onChangeValue}
                  name="base"
                />
              </Form.Field>
              <Form.Field>
                <label>Group Affiliation</label>
                <input
                  placeholder='group affiliation'
                  value={this.state.groupAffiliation}
                  onChange={this.onChangeValue}
                  name="groupAffiliation"
                />
              </Form.Field>
              <Form.Field>
                <label>Relatives</label>
                <input
                  placeholder='Relatives'
                  value={this.state.relatives}
                  onChange={this.onChangeValue}
                  name="relatives"
                />
              </Form.Field>
              <Form.Field>
                <label>Avatar</label>
                <input
                  placeholder='Avatar'
                  value={this.state.avatar}
                  onChange={this.onChangeValue}
                  name="avatar"
                />
              </Form.Field>
            </Form>
          </Grid>
        </Container>
      </Fragment>
    )
  }
}
export default InscriptionForm;

