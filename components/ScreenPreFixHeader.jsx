import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { Stack } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar } from 'expo-status-bar';

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
    <KeyboardAwareScrollView style={[ lStyles.container, props.pStyles, { backgroundColor: theme.colors.background } ]}>
      <SafeAreaView>
        <StatusBar style={theme.dark ? "light" : "dark"} />

        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitle: props.headerTitle,
            // @ts-ignore
            headerTintColor: theme.colors.text,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },

            headerLeft: props.headerLeft || null,
            headerRight: props.headerRight || null,
          }}
        />
        {props.children}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

const lStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  }
});

export default ScreenPreFixHeader;