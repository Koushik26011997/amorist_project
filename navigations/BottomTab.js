import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, View } from 'react-native';
import Followers from '../screens/mainScreens/Followers';
import Home from '../screens/mainScreens/Home';
import Menu from '../screens/mainScreens/Menu';
import Post from '../screens/mainScreens/Post';
import Search from '../screens/mainScreens/Search';
import { normalizeSize } from '../utility';
import Messages from '../screens/mainScreens/Messages';
import Alerts from '../screens/mainScreens/Alerts';
import Points from '../screens/mainScreens/Points';
import CreatePost from '../screens/mainScreens/CreatePost';

const Tab = createBottomTabNavigator();

const TAB_BAR_ICON_SIZE = 22;

const BottomTab = (props) => {

  const CustomTabBarButton = ({ children, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={{ top: -(normalizeSize(56, 42, 54) / 2), justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 60, height: 60, borderRadius: 30 }}>
        {children}
      </View>
    </TouchableOpacity>
  }

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveBackgroundColor: '#344AE0',
      tabBarInactiveBackgroundColor: '#344AE0',
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#fff',
      tabBarHideOnKeyboard: true,
      tabBarStyle: { height: normalizeSize(56, 42, 54), backgroundColor: '#344AE0' }
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              style={{
                height: TAB_BAR_ICON_SIZE,
                width: TAB_BAR_ICON_SIZE,
                resizeMode: 'contain',
                tintColor: color
              }}
              source={focused ? require('../assets/icons/home_active.png') : require('../assets/icons/home_inactive.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              style={{
                height: TAB_BAR_ICON_SIZE,
                width: TAB_BAR_ICON_SIZE,
                resizeMode: 'contain',
                tintColor: color,
              }}
              source={focused ? require('../assets/icons/search_active.png') : require('../assets/icons/search_inactive.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <View style={{ backgroundColor: '#fff', padding: 5, borderRadius: 19, borderWidth: 4, borderColor: '#344AE0' }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  tintColor: "#344AE0",
                }}
                source={require('../assets/icons/plus.png')}
              />
            </View>
          ),
          tabBarButton: (props) => {
            return <CustomTabBarButton {...props} />
          }
        }}
      />

      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              style={{
                height: TAB_BAR_ICON_SIZE,
                width: TAB_BAR_ICON_SIZE,
                resizeMode: 'contain',
                tintColor: color,
              }}
              source={focused ? require('../assets/icons/heart_active.png') : require('../assets/icons/heart_inactive.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Messages}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              style={{
                height: TAB_BAR_ICON_SIZE + 8,
                width: TAB_BAR_ICON_SIZE,
                resizeMode: 'cover',
                tintColor: color,
                marginBottom: 8
              }}
              source={require('../assets/icons/menu.png')}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomTab;
