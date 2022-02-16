import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { AuthStackNav } from './navigations/AuthStackNav';
import { Provider as PaperProvider } from 'react-native-paper';

//https://www.figma.com/file/tdnoD2ulD1aGUBgnv97TAz/Amorist-UI-ABCD?node-id=0%3A1

const App = () => {

  const [isShowSplashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar translucent={true} backgroundColor="#0C1C46" hidden={true} />
        {
          isShowSplashScreen ? <SplashComponent /> : <AuthStackNav />
        }
      </NavigationContainer>
    </PaperProvider>
  );
};

const SplashComponent = () => {
  return (
    <Image source={require("./assets/images/welcome_screen.png")} style={{ width: '100%', height: '100%' }} />
  )
}

const styles = StyleSheet.create({

});

export default App;
