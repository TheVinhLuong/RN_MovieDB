import { StatusBar } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
import DrawerItem from '../screens/DrawerItem'
import DrawerItem1 from '../screens/DrawerItem';
import Home1 from '../screens/Home';

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
    DrawerItem: {
      screen: DrawerItem,
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
    DrawerItem1: {
      screen: DrawerItem1,
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
