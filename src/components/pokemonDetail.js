import React, { Component } from 'react'
import { Sidebar, Menu, Item, Label } from 'semantic-ui-react'

class PokemonDetail extends Component {
    renderAbilities(currAbilities){
        if(!currAbilities){
            return '';
        }
         return currAbilities.map((ca,i) => {
             return (<Label key={i}>{ca.ability.name} </Label>)
         });
    }

    render() {
        const {currPokemon} =this.props;
        return (
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    width='wide'
                    direction='right'
                    visible={this.props.visible}
                    vertical
                    inverted
                >
                    <Menu.Item name='details'>
                        <Item className="ui header" as='h1'>Pokemon Details</Item>
                    </Menu.Item>
                    <Menu.Item name='name' className='detailItem'>
                        <Item.Meta>Name: </Item.Meta> <Label>{currPokemon.name}</Label>
                    </Menu.Item>
                    <Menu.Item name='image' className='detailItem'>
                     <Item.Meta>Image: </Item.Meta>
                        <Label><Item.Image  className='detailsimg' src={currPokemon.imageUrl} /></Label>
                    </Menu.Item>
                    <Menu.Item name='weight' className='detailItem'>
                        <Item.Meta>Weight: </Item.Meta> <Label>{currPokemon.weight}</Label>
                    </Menu.Item>
                    <Menu.Item name='camera' className='detailItem'>
                        <Item.Meta>Ability: </Item.Meta> {this.renderAbilities(currPokemon.abilities)}
                    </Menu.Item>
                </Sidebar>
        )
    }
}

export default PokemonDetail;
