import React from 'react'
import { Dropdown, Icon, Menu, Form, Radio } from 'semantic-ui-react';

class LateralBar extends React.Component {
  state = {
  }

  render() {
    const { toggleChange, gender } = this.props;
    return (
      <Menu style={{ marginTop: '7.2rem' }} vertical inverted fixed='left'>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item>
              <Form>
                <Form.Field>
                  <label>Gender</label>
                  <Radio
                    label="Female"
                    value="female"
                    checked={gender === 'female'}
                    onChange={toggleChange}
                  />
                  <Radio
                    label="Male"
                    value="male"
                    checked={gender === 'male'}
                    onChange={toggleChange}
                  />
                </Form.Field>
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

