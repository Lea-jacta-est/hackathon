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
                <Form.Field >
                  <label style={{ color: 'white' }}>Gender</label>
                  <Radio style={{ text: 'white' }}
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
              </Form>
            </Menu.Item>
          </Menu.Menu>
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

