import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { StoreCtx } from '../../utils/StoreCtx';
import { darkTheme, lightTheme } from '../../utils/theme';


const ClientLayout = () => {
  const { _state: { isDark } } = React.useContext(StoreCtx);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Stack />
    </PaperProvider>
  )
};

export default ClientLayout;