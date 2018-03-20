import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import currencies from '../data/currencies';
import { connectAlert } from '../components/Alert';
import { ListItem, Separator } from '../components/List';
import { fetchNewMovies, getInitialState } from '../actions/movies';

class Home extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    currentPage: PropTypes.number,
  };

  onEndReach = () => {
    console.log("wtf", "onEndReach");
    this.props.dispatch(fetchNewMovies(this.props.currentPage));
  }

  componentWillMount() {
    console.log("wtf", "component will mount: " + this.props.currentPage);
    this.props.dispatch(getInitialState());
    this.props.dispatch(fetchNewMovies(this.props.currentPage));
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
    console.log("wtf", "loading status: " + this.props.isLoading);
    if (this.props.isLoading) {
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

const mapStateToProps = (state) => {
  const isLoading = state.isLoading;
  console.log("wtf", "map state to props:" + isLoading);
  return {
    movies : state.movies,
    isLoading,
    currentPage: state.currentPage,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
