import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import logo from './image/logo.png';
import '../App.css';

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }} verticalAlign='bottom' className='bg-image' >
    <Grid.Column style={{ maxWidth: 450, marginBottom: 60, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10 }}>
      <Header as='h2' color='pink' textAlign='center'>
        <Image src={logo} />Login to AubergeMoi.com
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
)

export default Login;
