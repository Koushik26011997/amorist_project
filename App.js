import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, LogBox, StatusBar, StyleSheet, View } from 'react-native';
import { AuthStackNav } from './navigations/AuthStackNav';
import { Provider as PaperProvider } from 'react-native-paper';
import { ANIMATION_TIME, SCREEN_HEIGHT, SCREEN_WIDTH } from './utility';
import { Rtext } from './components/Rtext';
import MainStackNav from './navigations/MainStackNav';
import RootDrawerNav from './navigations/RootDrawerNav';
import * as Animatable from 'react-native-animatable';
import Messages from './screens/mainScreens/Messages';
import Profile from './screens/mainScreens/Profile';
import CreatePost from './screens/mainScreens/CreatePost';
import Chat from './screens/mainScreens/Chat';
import ExploreUsers from './screens/mainScreens/ExploreUsers';
import Home from './screens/mainScreens/Home';
import FullImageShow from './screens/mainScreens/FullImageShow';
import store from './store';
import { Provider, useSelector } from 'react-redux';
import Topics from './screens/authScreens/Topics';
import Influencers from './screens/authScreens/Influencers';
import Language from './screens/authScreens/Language';

//https://www.figma.com/file/tdnoD2ulD1aGUBgnv97TAz/Amorist-UI-ABCD?node-id=0%3A1

const App = () => {

  const [isShowSplashScreen, setSplashScreen] = useState(true);

  LogBox.ignoreAllLogs();

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar translucent={true} backgroundColor="#0C1C46" hidden={true} />
          {
            isShowSplashScreen ? <SplashComponent /> : <AuthStackNav />
          }
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

const MainNav = () => {
  const user = useSelector((state) => state.auth.user);
  return user ? <RootDrawerNav /> : <AuthStackNav />;
}

const SplashComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require("./assets/images/login_back.png")} style={{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      }} />
      <Animatable.View style={{
        width: SCREEN_WIDTH / 3,
        height: SCREEN_HEIGHT / 5, justifyContent: 'center', alignItems: 'center'
      }}
        duration={parseInt(ANIMATION_TIME * 2)}
        animation="bounceIn">
        <Image source={require("./assets/icons/logo.png")} style={{
          width: SCREEN_WIDTH / 3,
          height: SCREEN_HEIGHT / 4,
          resizeMode: 'contain',
          position: 'absolute',
        }} />
      </Animatable.View>
      <Rtext color='#fff' fontSize={12} style={{ margin: 6 }}>Where words bind the world!</Rtext>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default App;
