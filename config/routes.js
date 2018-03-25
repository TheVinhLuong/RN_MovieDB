import { StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

// const HomeStack = StackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         header: () => null,
//         headerTitle: 'Home',
//       },
//     },
//   },
//   {
//     headerMode: 'screen',
//   },
// );

const TabNavigation = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Home1: {
      screen: Home,
    },
  }
);

export default StackNavigator(
  {
    Tab: {
      screen: TabNavigation,
    },
    MovieDetail: {
      screen: MovieDetail,
    }
  },
  {
    headerMode: 'None',
    navigationOptions: {
      headerVisible: false,
    }
  }
)
