import React from 'react';
import { } from 'react-native';
import { Redirect, Stack } from 'expo-router';
// @ts-ignore
// import styles from './Index.style';

const Index = (props) => {

  //useEffect
  React.useEffect(() => {
  }, []);

  // ===CUSTOM===

  // __DOM__

  return (
    <React.Fragment>
      <Redirect href="/main" />
    </React.Fragment>
  )
}

export default Index;