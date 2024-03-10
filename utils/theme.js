import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';

export const darkTheme = {
  ...MD3DarkTheme,
  roundness: 0,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#fc3",
    secondary: "#a69358",
    text: '#fff',
    error: "#ffb4ab",
    title: "#000000",
    background: "#000000"
  }
}

export const lightTheme = {
  ...MD3LightTheme,
  roundness: 0,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#7845ac",
    secondary: "#665a6f",
    text: '#000',
    error: "#ba1a1a",
    title: "#ffffff",
    background: "#ffffff"
  }
}