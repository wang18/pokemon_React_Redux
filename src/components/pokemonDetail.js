import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Image, Icon, Header,Item, Label,Table } from 'semantic-ui-react'

class PokemonDetail extends Component {
    //state = { visible: false }
    constructor(props){
        super(props);
    }
    renderAbilities(currAbilities){
        if(!currAbilities){
            return '';
        }
         return(<Menu inverted vertical size='tiny' className='abilitiesList'>      {currAbilities.map((ca,i) => {
                    return (<Menu.Item key={i} name={ca.ability.name} />
                            )
         })}</Menu>)

    }
    render() {
        const {currPokemon} =this.props;

        console.log(currPokemon.abilities);
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
                        <Item.Header as='a'>Pokemon Details</Item.Header>
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
