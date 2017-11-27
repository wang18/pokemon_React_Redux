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
            visible: false,
            currPokemon:''
        };
        this.getDetail=this.getDetail.bind(this);
    }
    componentDidMount(){
        this.props.fetchPokemonList();
    }
    //toggleVisibility = () => this.setState({ visible: !this.state.visible })
    getDetail(pokemonName){
        this.setState({
            visible: true,
            currPokemon: pokemonName
        });
    }
    render(){
        //console.log(this.props.pokemonList);
        return (<div>
            <Sidebar.Pushable as={Segment}>
                <PokemonDetail visible={this.state.visible} pokemonName={this.state.currPokemon}/>
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <Grid columns='4' container>
                            {this.props.pokemonList.map((pokemonInfo, i) => {
                                return <PokemonItem getDetail={this.getDetail} key={i} pokemonInfo={pokemonInfo}/>
                            })}
                        </Grid>
                    </Segment>
                </Sidebar.Pusher>

            </Sidebar.Pushable>

        </div>);
    }
}

function mapStateToProps(state) {
    return {pokemonList:state.pokemonList};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPokemonList}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(pokemonList);