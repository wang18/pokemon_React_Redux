import React,{Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPokemonList} from '../actions/index';
import { Grid, Button, Sidebar, Segment, Header } from 'semantic-ui-react';

import PokemonItem from './pokemonItem';
import PokemonDetail from "./pokemonDetail";

class pokemonList extends Component{
    constructor(props){
        super(props);
        this.state={
            visible: false
        };
        this.getDetail=this.getDetail.bind(this);
    }
    componentDidMount(){
        this.props.fetchPokemonList();
    }
    componentWillUpdate(nextProps, nextState){
        if (nextState.visible) {
            document.querySelector('.pusher').addEventListener('click', this.handleClick);
        }
        else {
            document.querySelector('.pusher').removeEventListener('click', this.handleClick);
        }
    }
    //handle clicking for closing pokemon detail sidebar
    handleClick = () =>{
        if(this.state.visible){
            this.setState({visible: false});
        }
    }
    getDetail(){
        this.setState({
            visible: true
        });
        //console.log(this.props.pokemonDetails);
    }

    render(){
        //console.log(this.props.pokemonList);
        return (<div>
            <Sidebar.Pushable as={Segment}>
                <PokemonDetail visible={this.state.visible} currPokemon={this.props.pokemonDetails}/>
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <Grid columns='4' container>
                            {this.props.pokemonList.map((pokemonInfo, i) => {
                                return <PokemonItem getDetail={this.getDetail} key={i} pokemonInfo={pokemonInfo} />
                            })}
                        </Grid>
                    </Segment>
                </Sidebar.Pusher>

            </Sidebar.Pushable>

        </div>);
    }
}

function mapStateToProps(state) {
    return {
        pokemonList:state.pokemonList,
        pokemonDetails:state.pokemonDetails
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPokemonList}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(pokemonList);