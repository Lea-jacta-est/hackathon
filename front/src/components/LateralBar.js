import React from 'react'
import { Dropdown, Icon, Menu, Form, Radio, Button } from 'semantic-ui-react';

class LateralBar extends React.Component {
  state = {
  }

  render() {
    const { toggleChange, gender, toggleHair, hair } = this.props;
    return (
      <Menu style={{ marginTop: '7.2rem' }} vertical inverted fixed='left'>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item>
              <Form>
                <Form.Field>
                  <label style={{ color: 'white' }}>Gender</label>
                  <Radio style={{ color: 'white' }}
                    label="Female"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={toggleChange}
                  />
                  <Radio style={{ color: 'white' }}
                    label="Male"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={toggleChange}
                  />
                </Form.Field>
                <Button
                  value="blond"
                  inverted color='yellow'
                  onChange={hair === 'blond'}
                  onClick={toggleHair}

                >
                  Blond
               </Button>
                <Button
                  value="black"
                  inverted color='black'
                  onChange={hair === 'black'}
                  onClick={toggleHair}

                >
                  Black
               </Button>
              </Form>
            </Menu.Item>

            <Menu.Item name='add' >
              Add
            </Menu.Item>
            <Menu.Item name='about' >
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item name='browse' >
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
        >
          Messages
        </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu >
    )
  }
}
export default LateralBar;

