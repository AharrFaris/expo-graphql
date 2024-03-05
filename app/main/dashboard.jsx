import { Stack, router } from 'expo-router';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Button, useTheme, } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// @ts-ignore
// import styles from './Dashboard.style';

const Dashboard = (props) => {

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
            headerTitle: "Dashboard",
            headerShadowVisible: false,
            headerTintColor: theme.colors.secondary,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />


        <Button
          icon="send"
          mode="contained"
          onPress={() => router.push('/main/admin')}
        >
          Admin
        </Button>


      </SafeAreaView>
    </React.Fragment>
  )
}

export default Dashboard;