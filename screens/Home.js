import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';
import { fetchNewMovies, getInitialState } from '../actions/movies';

class Home extends Component {

  onEndReach = () => {
    console.log("wtf", "onEndReach");
  }

  componentWillMount() {
    console.log("fetch new movies");
    this.props.dispatch(getInitialState());
    this.props.dispatch(fetchNewMovies());
  }

  componentWillReceiveProps(nextProps) {
    console.log("wtf", "component will receive props:" + nextProps);
  }

  handlePress = (currency) => {
    // const { type } = this.props.navigation.state.params;
    // if (type === 'base') {
    //   this.props.dispatch(changeBaseCurrency(currency));
    // } else if (type === 'quote') {
    //   this.props.dispatch(changeQuoteCurrency(currency));
    // }

    // this.props.navigation.goBack(null);
  };

  render() {
    console.log("wtf", "movies length: " + this.props.movies);
    if (!this.props.movies[1]) {
      return (
        <ActivityIndicator size="large" color="#0000ff" />
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar translucent={false} barStyle="default" />
          <FlatList
            data={this.props.movies}
            renderItem={({ item }) => (
              <ListItem
                movie={item}
                // selected={item === comparisonCurrency}
                onPress={() => this.handlePress(item)}
                iconBackground={this.props.primaryColor}
              />
            )}
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
            onEndReached={this.onEndReach}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log("wtf", "map state to props");
  return {
    movies : state.movies,
  }
}

export default connect(mapStateToProps)(Home);
