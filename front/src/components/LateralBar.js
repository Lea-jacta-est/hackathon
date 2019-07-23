import React from 'react'
import { Menu, Form, Radio, Select, Container } from 'semantic-ui-react';


const colorHair = [
  { key: 'No Hair', value: 'No Hair', text: 'No Hair' },
  { key: 'Black', value: 'Black', text: 'Black' },
  { key: 'Blond', value: 'Blond', text: 'Blond' },
  { key: 'Brown', value: 'Brown', text: 'Brown' },
  { key: 'White', value: 'White', text: 'White' },
  { key: 'Purple', value: 'Purple', text: 'Purple' },
  { key: 'Orange', value: 'Orange', text: 'Orange' },
  { key: 'Pink', value: 'Pink', text: 'Pink' },
  { key: 'Red', value: 'Red', text: 'Red' },
  { key: 'Auburn', value: 'Auburn', text: 'Auburn' },
  { key: 'Strawberry Blond', value: 'Strawberry Blond', text: 'Strawberry Blond' },
  { key: 'black', value: 'black', text: 'black' },
  { key: 'Blue', value: 'Blue', text: 'Blue' },
  { key: 'Green', value: 'Green', text: 'Green' },
  { key: 'Magenta', value: 'Magenta', text: 'Magenta' },
  { key: 'Brown / Black', value: 'Brown / Black', text: 'Brown / Black' },
  { key: 'blond', value: 'blond', text: 'blond' },
  { key: 'Silver', value: 'Silver', text: 'Silver' },
  { key: 'Grey', value: 'Grey', text: 'Grey' },
  { key: 'Orange / White', value: 'Orange / White', text: 'Orange / White' },
  { key: 'Yellow', value: 'Yellow', text: 'Yellow' },
  { key: 'Brown / White', value: 'Brown / White', text: 'Brown / White' },
  { key: 'Brownn', value: 'Brownn', text: 'Brownn' },
  { key: 'Gold', value: 'Gold', text: 'Gold' },
  { key: 'Red / Orange', value: 'Red / Orange', text: 'Red / Orange' },
  { key: 'Indigo', value: 'Indigo', text: 'Indigo' },
  { key: 'Red / White', value: 'Red / White', text: 'Red / White' },
  { key: 'Black / Blue', value: 'Black / Blue', text: 'Black / Blue' },



]
const colorEye = [
  { key: 'Yellow', value: 'Yellow', text: 'Yellow' },
  { key: 'Blue', value: 'Blue', text: 'Blue' },
  { key: 'Green', value: 'Green', text: 'Green' },
  { key: 'Brown', value: 'Brown', text: 'Brown' },
  { key: 'Red', value: 'Red', text: 'Red' },
  { key: 'Violet', value: 'Violet', text: 'Violet' },
  { key: 'White', value: 'White', text: 'White' },
  { key: 'Purple', value: 'Purple', text: 'Purple' },
  { key: 'Black', value: 'Black', text: 'Black' },
  { key: 'blue', value: 'blue', text: 'blue' },
  { key: 'brown', value: 'brown', text: 'brown' },
  { key: 'Silver', value: 'Silver', text: 'Silver' },
  { key: 'Yellow / Red', value: 'Yellow / Red', text: 'Yellow / Red' },
  { key: 'Grey', value: 'Grey', text: 'Grey' },
  { key: 'Yellow (without irises)', value: 'Yellow (without irises)', text: 'Yellow (without irises)' },
  { key: 'Gold', value: 'Gold', text: 'Gold' },
  { key: 'Blue / White', value: 'Blue / White', text: 'Blue / White' },
  { key: 'Hazel', value: 'Hazel', text: 'Hazel' },
  { key: 'Green / Blue', value: 'Green / Blue', text: 'Green / Blue' },
  { key: 'White / Red', value: 'White / Red', text: 'White / Red' },
  { key: 'Indigo', value: 'Indigo', text: 'Indigo' },
  { key: 'Amber', value: 'Amber', text: 'Amber' },
  { key: 'Yellow / Blue', value: 'Yellow / Blue', text: 'Yellow / Blue' },
  { key: 'Red / Orange', value: 'Red / Orange', text: 'Red / Orange' },
  { key: 'Bown', value: 'Bown', text: 'Bown' },

]

class LateralBar extends React.Component {
  state = {
  }

  render() {
    const { toggleChange, gender, toggleHair, toggleEye } = this.props;
    return (
      <Container textAlign='left' style={{ paddingLeft: '10px' }}>
        <Menu style={{ marginTop: '7.2rem' }} vertical inverted fixed='left'>

          <Menu.Item>
            <Menu.Header>Genre</Menu.Header>
            <Menu.Menu>

              <Menu.Item>
                <Menu.Item>
                  <Radio style={{ text: 'white' }}
                    label="Female"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={toggleChange}
                  />
                </Menu.Item>
                <Menu.Item>
                  <Radio style={{ text: 'white' }}
                    label="Male"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={toggleChange}
                  />
                </Menu.Item>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Eyes Color</Menu.Header>

            <Menu.Menu>
              <Menu.Item>
                <Select
                  onChange={toggleEye}
                  placeholder='Eye'
                  options={colorEye}
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Hair Color</Menu.Header>

            <Menu.Menu>
              <Menu.Item>
                <Select
                  onChange={toggleHair}
                  placeholder='Hair'
                  options={colorHair}
                />

              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Container>
      // <Menu >

      //   <Menu.Item>
      //     <Menu.Menu>
      //       <Menu.Item>
      //         <Form>
      //           <label>Gender</label>
      //           <Menu.Item>

      //             <Menu.Item>
      //              
      //             </Menu.Item>
      //           </Menu.Item>
      //           <label>Hair Color</label>
      //           <Menu.Item>

      //            
      //           </Menu.Item>
      //           
      //         </Form>
      //       </Menu.Item>
      //     </Menu.Menu>
      //   </Menu.Item>
      // </Menu >
    )
  }
}
export default LateralBar;

