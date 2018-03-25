import { StatusBar } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
import DrawerItem from '../screens/DrawerItem'

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
  },
  {
    tabBarPosition: 'bottom',
  }
);

const DrawerNavigation = DrawerNavigator(
  {
    TabScreen: {
      screen: TabNavigation,
    },
    DrawerItem: {
      screen: DrawerItem,
    }
  },
  {
    initialRouteName: 'TabScreen',
  }
);

export default StackNavigator(
  {
    DrawerScreens: {
      screen: DrawerNavigation,
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
