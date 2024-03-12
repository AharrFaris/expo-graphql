import { Stack, router } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { Button, useTheme, } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenPreFix from '../../../components/ScreenPreFix';

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
      <ScreenPreFix>
        <Button
          icon="chevron-left"
          mode="contained"
          onPress={() => router.back()}
        >
          Go back
        </Button>

        <Button
          icon="chevron-right"
          mode="contained"
          onPress={() => router.push('/clients')}
        >
          Clients
        </Button>
      </ScreenPreFix>
    </React.Fragment>
  )
}

export default AdminIndex;