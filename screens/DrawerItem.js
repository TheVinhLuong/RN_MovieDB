import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ActivityIndicator, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class DrawerItem extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            header: <Button
                title="Update the title"
                onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
            />
        }
    }

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
    return {

    };
}

export default connect(mapStateToProps)(DrawerItem);