import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { Stack } from 'expo-router';

// @ts-ignore
// import styles from './ScreenPreFix.style';

const ScreenPreFixHeader = (props) => {

  //useEffect
  React.useEffect(() => {
  }, []);

  // ===CUSTOM===
  const theme = useTheme();

  // __DOM__

  return (
    <React.Fragment>
      <SafeAreaView style={[ lStyles.container, props.pStyles, { backgroundColor: theme.colors.background } ]}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitle: props.headerTilte,
            headerTintColor: theme.colors.secondary,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },

            headerLeft: props.headerLeft || null,
            headerRight: props.headerRight || null,
          }}
        />
        {props.children}
      </SafeAreaView>

    </React.Fragment>
  )
}

const lStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  }
});

export default ScreenPreFixHeader;