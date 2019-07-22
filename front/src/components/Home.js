import React, { Component } from 'react';
import { Menu, Dropdown} from 'semantic-ui-react';
import logo from './image/logo';


export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu inverted size='massive'>
            <Menu.Item header>
                <img src={logo}>
                </img>
            </Menu.Item>
            <Menu.Item name='home' color="pink" active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
            color="pink"
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            color="pink"
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
            <Dropdown color="pink" item text='Category'>
                <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Menu>
      </Menu>
    )
  }
}