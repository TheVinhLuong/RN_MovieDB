import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';

class MovieDetail extends Component {
    
    render() {
        const movie = this.props.navigation.state.params.movie;
        console.log("wtf", "movie: " + JSON.stringify(movie));
        return (
            <Text>
                {JSON.stringify(movie)}
            </Text>
        );
    }
}

const mapStateToProps = (state) => {
    return{
     
    };
}

export default connect(mapStateToProps)(MovieDetail);