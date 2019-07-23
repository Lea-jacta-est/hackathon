import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import logo from './image/logo.png';
import "../App.css"

const Login = () => (
  <Container style={{ backgroundColor: 'black' }} fluid>
    <div className='bghero' >
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

        <Grid.Column style={{ maxWidth: 450, backgroundColor: 'black' }}>

          <Header as='h2' color='pink' textAlign='center'>
            <Image src={logo} /> Log-in to your account
      </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Link to="/home">
                <Button color='pink' fluid size='large'>
                  Login
          </Button>
              </Link>
            </Segment>
          </Form>
          <Message>
            New to us?
          <Link to="/signup">
              Sign Up
          </Link>
          </Message>

        </Grid.Column>
      </Grid >
    </div>
  </Container >
)

export default Login;
