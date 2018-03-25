import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';

class DrawerItem extends Component {
    
    render() {
        return (
            <Text
            onPress={() => this.props.navigation.goBack()}
            >
                {"ahihi"}
                
            </Text>
        );
    }
}

const mapStateToProps = (state) => {
    return{
     
    };
}

export default connect(mapStateToProps)(DrawerItem);