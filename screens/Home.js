import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import currencies from '../data/currencies';
import { connectAlert } from '../components/Alert';
import { ListItem, Separator } from '../components/List';
import { fetchNewMovies, getInitialState, getOnScrollEnd } from '../actions/movies';

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
    if (!this.props.componentDidMount) {
      console.log("wtf", "component NOT mount");
      this.props.dispatch(getInitialState());
      this.props.dispatch(fetchNewMovies(this.props.currentPage));
    }
  }

  componentDidMount() {
    if (this.props.componentDidMount) {
      let offset = {
        offset: this.props.listOffset.y,
        animated: false
      }

    }
  }

  componentWillReceiveProps(nextProps) {

  }

  handlePress = (movie) => {
    this.props.navigation.navigate("MovieDetail", { movie: movie });
  };

  handleScrollEnd = (event) => {
    console.log("wtf", "y: " + event.nativeEvent.contentOffset.y)
    this.props.dispatch(getOnScrollEnd(event.nativeEvent.contentOffset))
  }

  onLayoutRender = (event) => {
    if (this.props.componentDidMount) {
      let offset = {
        offset: this.props.listOffset.y,
        animated: false
      }
      console.log("wtf", "layoutrender: " + JSON.stringify(offset));
      this.refs.listRef.scrollToOffset(offset);
    }
  }

  render() {
    console.log("wtf", "list offset: " + JSON.stringify(this.props.listOffset));
    return (
      <View style={{ flex: 1 }}>
        <FlatList style={{ flex: 1, paddingTop: 0 }}
          ref="listRef"
          data={this.props.movies}
          onLayout={this.onLayoutRender}
          renderItem={({ item }) => (
            <ListItem
              movie={item}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={Separator}
          onEndReached={this.onEndReach}
          onEndReachedThreshold={1.0}
          bounces={false}
          // scrollToOffSet={{x:0,y:37.66666793823242}}
          onScroll={this.handleScrollEnd}
        />
      </View>
    );
  }

  componentWillUnmount() {

  }

  componentDidUpdate() {

  }
}

const mapStateToProps = (state) => {
  const isLoading = state.movies.isLoading;
  return {
    movies: state.movies.movies,
    isLoading,
    currentPage: state.movies.currentPage,
    componentDidMount: state.movies.componentDidMount,
    listOffset: state.movies.listOffset,
  };
};

export default connect(mapStateToProps, null, null, { withRef: true })(connectAlert(Home));

