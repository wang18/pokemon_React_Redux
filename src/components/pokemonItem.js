import React,{Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPokemonDetail} from '../actions/index';
import { Grid, Image, Card } from 'semantic-ui-react';


class pokemonItem extends Component{
    constructor(props){
        super(props);
        this.handleGetDetail=this.handleGetDetail.bind(this);
    }

    handleGetDetail(e){
        this.props.fetchPokemonDetail(this.props.pokemonInfo.url);
        /*this.props.getDetail();
        console.log(this.props.pokemonInfo.name);*/
    }

    componentWillReceiveProps(nextProps){
        if(this.props.pokemonDetails !== nextProps.pokemonDetails){
            this.props.getDetail();
            //console.log(this.props.pokemonInfo.name);
        }
    }
    render(){
        const {pokemonInfo}=this.props;
        //console.log(pokemonInfo);
        return (<Grid.Column>
                <Card fluid color='purple' onClick={this.handleGetDetail}>
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

function mapStateToProps(state) {
    return {pokemonDetails:state.pokemonDetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPokemonDetail}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(pokemonItem);


