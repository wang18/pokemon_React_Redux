import expect from 'expect';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import PokemonList from './pokemonList';
import PokemonDetail from './pokemonDetail';
import PokemonItem from './pokemonItem';
import createStoreWithMiddleware from '../store/index';
Enzyme.configure({ adapter: new Adapter() });

describe('Pokedex unit test', () => {
    const store = createStoreWithMiddleware();
    const context = {store};
    const minPokemonItemProps={
        getDetail: ()=>{
            this.setState({
            visible: true
        });},
        pokemonInfo:{
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
    };
    const minPokemonDetailProps={
        visible: true,
        currPokemon: {
            id:'3',
            name:'venusaur',
            imageUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            weight:'1000',
            abilities:[
                {ability: {
                    name:"chlorophyll",
                    url: "https://pokeapi.co/api/v2/ability/34/"}
                },
                {ability: {
                    name:"overgrow",
                    url: "https://pokeapi.co/api/v2/ability/65/"}
                }
            ]
        }
    };

   it('renders app without exploding', ()=> {
       expect(
           shallow(
               <App />
           ).length
       ).toEqual(1);
   });

    it('renders pokemon list without crash',()=>{
        shallow(<PokemonList />, {context});
    });

    it('render pokemon item without crash', ()=>{
        const pokemonItemSample1 = mount(<PokemonItem {...minPokemonItemProps} />, {context});
    });

    it('render correct pokemon item', () => {
        const pokemonItemSample2props={
            getDetail: ()=>{
                this.setState({
                    visible: true
                });},
            pokemonInfo:{
                name: 'ivysaur',
                url: 'https://pokeapi.co/api/v2/pokemon/2',
                imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
            }
        };
        const pokemonItemSample2 = mount(<PokemonItem {...pokemonItemSample2props} />, {context});
        const pokemonItemName = pokemonItemSample2.find('div.cardHeaderColor');
        const pokemonItemImg = pokemonItemSample2.find('img.cardImg');

        expect(
            pokemonItemName.text()
        ).toBe(
            pokemonItemSample2props.pokemonInfo.name
        );
        expect(
            pokemonItemImg.prop('src')
        ).toBe(pokemonItemSample2props.pokemonInfo.imageUrl
        );
    });

    it('render pokemon detail without crash', ()=>{
        const pokemonDetailSample1 = mount(<PokemonDetail {...minPokemonDetailProps}/>)
    });

    it('render correct pokemon detail', ()=>{
        const pokemonDetailSample2Props={
            visible: true,
            currPokemon: {
                id:'4',
                name:'charmander',
                imageUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
                weight:'85',
                abilities:[
                    {ability: {
                        name:"solar-power",
                        url: "https://pokeapi.co/api/v2/ability/94/"}
                    },
                    {ability: {
                        name:"blaze",
                        url: "https://pokeapi.co/api/v2/ability/66/"}
                    }
                ]
            }
        };
        const pokemonDetailSample2 = mount(<PokemonDetail {...pokemonDetailSample2Props}/>);
        const pokemonDetailName = pokemonDetailSample2.find('div.label').at(0);
        const pokemonDetailImg = pokemonDetailSample2.find('.detailsimg img');
        const pokemonDetailWeight = pokemonDetailSample2.find('div.label').at(2);
        const pokemonDetailAbility1 = pokemonDetailSample2.find('div.label').at(3);
        const pokemonDetailAbility2 = pokemonDetailSample2.find('div.label').at(4);

        expect(
            pokemonDetailName.text()
        ).toBe(
            pokemonDetailSample2Props.currPokemon.name
        );

        expect(
            pokemonDetailImg.prop('src')
        ).toBe(
            pokemonDetailSample2Props.currPokemon.imageUrl
        );
       expect(
            pokemonDetailWeight.text()
        ).toBe(
            pokemonDetailSample2Props.currPokemon.weight
        );

       expect(
           pokemonDetailAbility1.text()
       ).toBe(
           pokemonDetailSample2Props.currPokemon.abilities[0].ability.name
       );

       expect(
           pokemonDetailAbility2.text()
       ).toBe(
           pokemonDetailSample2Props.currPokemon.abilities[1].ability.name
       );

    });

});