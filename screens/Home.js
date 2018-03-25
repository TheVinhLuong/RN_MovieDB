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
    if (!this.props.isLoading) {
      console.log("wtf", "onEndReach");
      this.props.dispatch(fetchNewMovies(this.props.currentPage));
    }
  }

  componentWillMount() {
    console.log("wtf", "component will mount: " + this.props.currentPage);
    this.props.dispatch(getInitialState());
    this.props.dispatch(fetchNewMovies(this.props.currentPage));
  }

  componentWillReceiveProps(nextProps) {
    console.log("wtf", "component will receive props:" + nextProps);
  }

  handlePress = (movie) => {
    this.props.navigation.navigate("MovieDetail", {movie: movie});
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList style={{flex:1, paddingTop:0}}
          automaticallyAdjustContentInsets={false}
          data={this.props.movies}
          renderItem={({ item }) => (
            <ListItem
              movie={item}
              // selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          onEndReached={this.onEndReach}
          onEndReachedThreshold={0.8}
          bounces={false}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const isLoading = state.isLoading;
  return {
    movies: state.movies,
    isLoading,
    currentPage: state.currentPage,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));


