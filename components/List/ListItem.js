import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight, Image, ActivityIndicator } from 'react-native';

import styles from './styles';
const ListItem = ({
  movie,
  onPress,
}) => {
  const thumbPath = movie.poster_path
  return typeof movie.isLoading !== 'undefined' ?
    (<ActivityIndicator size="large" color="#0000ff" />) : 
    (<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.container}>
        <Image style={styles.thumb} source={{ uri: 'http://image.tmdb.org/t/p/w185'+thumbPath }} />
        <Text style={styles.text}>{movie.title}</Text>
      </View>
    </TouchableHighlight>)
};

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
