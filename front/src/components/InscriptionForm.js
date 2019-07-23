import React, { Fragment } from 'react'
import { Button, Form, Container, Grid } from 'semantic-ui-react';


const FormExampleForm = () => (
  <Fragment>
    <Container style={{ marginTop: "8.5rem", textAlign: "center" }} fluid>
      <Grid>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Full name</label>
            <input placeholder='Full name' />
          </Form.Field>
          <Form.Field>
            <label>Intelligence</label>
            <input placeholder='Intelligence' />
          </Form.Field>          <Form.Field>
            <label>Strength</label>
            <input placeholder='Strength' />
          </Form.Field>          <Form.Field>
            <label>Speed</label>
            <input placeholder='Speed' />
          </Form.Field>          <Form.Field>
            <label>Combat</label>
            <input placeholder='Combat' />
          </Form.Field>          <Form.Field>
            <label>Durability</label>
            <input placeholder='Durability' />
          </Form.Field>          <Form.Field>
            <label>Power</label>
            <input placeholder='Power' />
          </Form.Field>          <Form.Field>
            <label>Race</label>
            <input placeholder='Race' />
          </Form.Field>          <Form.Field>
            <label>Gender</label>
            <input placeholder='Gender' />
          </Form.Field>          <Form.Field>
            <label>Heigth</label>
            <input placeholder='Heigth' />
          </Form.Field>          <Form.Field>
            <label>Weigth</label>
            <input placeholder='Weigth' />
          </Form.Field>          <Form.Field>
            <label>Eye Color</label>
            <input placeholder='Eye Color' />
          </Form.Field>          <Form.Field>
            <label>Hair Color</label>
            <input placeholder='Hair Color' />
          </Form.Field>           <Form.Field>
            <label>Place of birth</label>
            <input placeholder='Place of birth' />
          </Form.Field>          <Form.Field>
            <label>Alignment</label>
            <input placeholder='Alignment' />
          </Form.Field>          <Form.Field>
            <label>Occupation</label>
            <input placeholder='Occupation' />
          </Form.Field> <Form.Field>
            <label>Base</label>
            <input placeholder='Base' />
          </Form.Field> <Form.Field>
            <label>Group Affiliation</label>
            <input placeholder='Occupation' />
          </Form.Field> <Form.Field>
            <label>Relatives</label>
            <input placeholder='Relatives' />
          </Form.Field> <Form.Field>
            <label>Avatar</label>
            <input placeholder='Avatar' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Grid>
    </Container>

  </Fragment>
)

export default FormExampleForm
