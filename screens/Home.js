import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

import {fetchNewMovies} from '../actions/movies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
  };

  onEndReach = () => {
    console.log("wtf", "onEndReach");
  }

  componentWillMount(){
    console.log("fetch new movies");
    this.props.dispatch(fetchNewMovies());
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
    // let comparisonCurrency = this.props.baseCurrency;
    // if (this.props.navigation.state.params.type === 'quote') {
    //   comparisonCurrency = this.props.quoteCurrency;
    // }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              // selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
          onEndReached ={this.onEndReach}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
