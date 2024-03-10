import React from 'react';
import {
  View, StyleSheet,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import { Button, IconButton, TextInput, useTheme } from 'react-native-paper';
import { gql, useMutation } from '@apollo/client';
import { router } from 'expo-router';
import { StoreCtx } from '../../utils/StoreCtx';
import ScreenPreFixHeader from '../../components/ScreenPreFixHeader';

// @ts-ignore
// import styles from './Home.style';

const GET_BOOKS = gql`
  query{
    getBooks{
      name
      author
    }
  }
`;

const ADD_BOOK = gql`
  mutation(
    $name: String!
    $author: String!
  ){
    addBook(
      input:{
        name: $name,
        author: $author
      }
    ){
      name
      author
    }
  }
`

const Home = (props) => {
  const { _state: { isDark }, __toggleTheme
  } = React.useContext(StoreCtx);

  const [ formData, $formData ] = React.useState({ name: '', author: '' });
  const [ formErr, $formErr ] = React.useState({ name: '', author: '' });

  //useEffect
  React.useEffect(() => {
  }, []);

  // ===CUSTOM===
  const theme = useTheme();
  const [ addBook, { loading } ] = useMutation(ADD_BOOK, {
    variables: formData,
    update(proxy, results) {

      const newBook = results.data.addBook;

      if (newBook) {

        $formData({ ...formData, name: '', author: '' });
        router.push('/main/dashboard');

        // let { getBooks } = proxy.readQuery({
        //   query: GET_BOOKS
        // });

        // if (getBooks) {

        //   proxy.writeQuery({
        //     query: GET_BOOKS,
        //     data: {
        //       getBooks: [ ...getBooks, newBook ]
        //     }
        //   });
        // }
      }

    },
    onError(err) {
      console.log('main page', err.message)
    }
  });

  const onSubmit = () => {
    if (formData.name === '') {
      $formErr({ ...formErr, name: 'The field cannot be empty!', });
      return;
    }

    if (formData.author === '') {
      $formErr({ ...formErr, author: 'The field cannot be empty!', });
      return;
    }

    addBook();
  }

  // __DOM__

  return (
    <React.Fragment>

      <ScreenPreFixHeader
        headerTilte="Home"
        headerRight={() => (
          <IconButton
            icon={isDark ? "white-balance-sunny" : "weather-night"}
            iconColor={theme.colors.primary}
            size={20}
            onPress={() => __toggleTheme(!isDark)}
          />
        )}
      >

        <View style={lStyles.logoWrap}>
          <Image source={require('../../assets/logo.png')} style={{ width: 100, height: 100 }} />
          <Text style={{ color: theme.colors.text, marginTop: 10, fontSize: 16 }}>Welcome, you have been missed!</Text>
        </View>

        <View style={lStyles.inputWrap}>
          <TextInput
            label="Book"
            value={formData.name}
            onChangeText={text => {
              $formErr({ ...formErr, name: '' });
              $formData({ ...formData, name: text });
            }}
          />
          {
            formErr.name ?
              <Text style={{ color: theme.colors.error }}>{formErr.name}</Text> : null
          }
        </View>

        <View style={lStyles.inputWrap}>
          <TextInput
            label="Author"
            value={formData.author}
            onChangeText={text => {
              $formErr({ ...formErr, author: '' });
              $formData({ ...formData, author: text });
            }}
          />
          {
            formErr.author ?
              <Text style={{ color: theme.colors.error }}>{formErr.author}</Text> : null
          }
        </View>

        <View style={lStyles.inputWrap}>
          <Button
            icon={loading ? "" : "send"}
            mode="contained"
            onPress={onSubmit}
            disabled={loading}
          >
            {
              loading ?
                <ActivityIndicator /> :
                'Submit'
            }
          </Button>
        </View>
      </ScreenPreFixHeader >
    </React.Fragment >
  )
}

const lStyles = StyleSheet.create({

  logoWrap: {
    height: 150,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  inputWrap: {
    marginVertical: 10,
  }

});

export default Home;