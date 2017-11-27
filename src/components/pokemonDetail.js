import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react'

class PokemonDetail extends Component {
    //state = { visible: false }
    constructor(props){
        super(props);
    }
    render() {
        return (
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    width='wide'
                    direction='right'
                    visible={this.props.visible}
                    icon='labeled'
                    vertical
                    inverted
                >
                    <Menu.Item name='home'>
                        <Icon name='home' />
                        Name: {this.props.pokemonName}
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad' />
                        Image
                    </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Weight
                    </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Ability
                    </Menu.Item>
                </Sidebar>
        )
    }
}

export default PokemonDetail;
