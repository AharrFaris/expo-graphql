import { Stack, router } from 'expo-router';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Button, useTheme, } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenPreFixHeader from '../../components/ScreenPreFixHeader';

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
      <ScreenPreFixHeader
        headerTitle="Dashboard"
      >
        <Button
          mode="contained"
          onPress={() => router.push('/main/admin')}
        >
          Admin
        </Button>
      </ScreenPreFixHeader>
    </React.Fragment>
  )
}

export default Dashboard;