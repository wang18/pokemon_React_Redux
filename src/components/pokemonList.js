import React,{Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPokemonList} from '../actions/index';
import { Grid, Sidebar, Segment, Header, Loader } from 'semantic-ui-react';
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
    }

    loadingItem = () =>{
        this.props.fetchPokemonList(this.props.pokemonList.offset);
    }

    render(){
        return (<div>
            <Sidebar.Pusher as={Segment}>
                    <PokemonDetail visible={this.state.visible} currPokemon={this.props.pokemonDetails}/>
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h1'className='pageHeader'>Pokedex</Header>
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadingItem}
                            loader={<Grid container><Grid.Row><Loader inline='centered' /></Grid.Row></Grid>}
                            hasMore={this.props.pokemonList.moreItem}
                            useWindow={true}>
                            <Grid columns='4' container>
                                {this.props.pokemonList.pokemonResultList.map((pokemonInfo, i) => {
                                    return <PokemonItem getDetail={this.getDetail} key={i} pokemonInfo={pokemonInfo} />
                                })}
                            </Grid>
                        </InfiniteScroll>
                    </Segment>
                </Sidebar.Pusher>

            </Sidebar.Pusher>

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