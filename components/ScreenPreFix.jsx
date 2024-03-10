import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { Stack } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar } from 'expo-status-bar';

// @ts-ignore
// import styles from './ScreenPreFix.style';

const ScreenPreFix = (props) => {

  //useEffect
  React.useEffect(() => {
  }, []);

  // ===CUSTOM===
  const theme = useTheme();

  // __DOM__

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={[ lStyles.container, props.pStyles, { backgroundColor: theme.colors.background } ]}>
        <StatusBar style={theme.dark ? "light" : "dark"} />

        <Stack.Screen
          options={{
            headerShown: false
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
  },

});

export default ScreenPreFix;