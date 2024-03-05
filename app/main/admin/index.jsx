import { Stack, router } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { Button, useTheme, } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// @ts-ignore
// import styles from './AdminIndex.style';

const AdminIndex = (props) => {

  //useEffect
  React.useEffect(() => {
  }, []);

  // ===CUSTOM===
  const theme = useTheme();

  // __DOM__

  return (
    <React.Fragment>
      <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: "Admin"
          }}
        />

        <Button
          icon="send"
          mode="contained"
          onPress={() => router.back()}
        >
          Go back
        </Button>

        <Button
          icon="send"
          mode="contained"
          onPress={() => router.push('/clients')}
        >
          Clients
        </Button>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default AdminIndex;