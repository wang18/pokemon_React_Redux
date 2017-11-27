import React,{Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPokemonList} from '../actions/index';
import { Grid, Image, Card } from 'semantic-ui-react';


class pokemonItem extends Component{
    constructor(props){
        super(props);
        this.handleGetDetail=this.handleGetDetail.bind(this);
    }
    componentDidMount(){
        //this.props.fetchPokemonList();
    }
    handleGetDetail(){
        this.props.getDetail(this.props.pokemonInfo.name);
    }
    render(){
        const {pokemonInfo}=this.props;
        console.log(pokemonInfo);
        return (<Grid.Column>
                <Card fluid color='green' onClick={this.handleGetDetail}>
                    <Image src={pokemonInfo.imageUrl} />
                    <Card.Content>
                        <Card.Header>
                            {pokemonInfo.name}
                        </Card.Header>
                    </Card.Content>
                </Card>
        </Grid.Column>);
    }
}
/*
function mapStateToProps(state) {
    return {pokemonList:state.pokemonList};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPokemonList}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(pokemonList);*/
export default pokemonItem;


