import React from 'react';
import { BottomTab, BottomTabRoutes } from './routes';
import FeedScreen from '../../../screens/Feed';
import DiscoverScreen from '../../../screens/Discover';
import InboxScreen from '../../../screens/Inbox';
import ProfileScreen from '../../../screens/Profile';
import theme from '../../../constants/styles/theme';
import TabBarIcon from '../../TabBarIcon';

const BottomTabNavigator = (): React.ReactElement => {
  return (
    <BottomTab.Navigator
      initialRouteName={BottomTabRoutes.FEED}
      screenOptions={{
        tabBarActiveTintColor: theme.color.black,
        tabBarInactiveTintColor: theme.color.gray
      }}
    >
      <BottomTab.Screen
        name={BottomTabRoutes.FEED}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'planet' : 'planet-outline'}
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={BottomTabRoutes.DISCOVER}
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'search' : 'search-outline'}
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={BottomTabRoutes.INBOX}
        component={InboxScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'}
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={BottomTabRoutes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
