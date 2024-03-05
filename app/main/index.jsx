import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { Button, Icon, IconButton, TextInput, useTheme } from 'react-native-paper';
import { gql, useMutation } from '@apollo/client';
import { Stack, router } from 'expo-router';
import { StoreCtx } from '../../utils/StoreCtx';
import { SafeAreaView } from 'react-native-safe-area-context';
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

  //useEffect
  React.useEffect(() => {
  }, []);

  // ===CUSTOM===
  const theme = useTheme();
  const [ addBook ] = useMutation(ADD_BOOK, {
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
    if (formData.author === '' || formData.author === '') {
      alert('All fields need to be filled');
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

        <TextInput
          label="Book"
          value={formData.name}
          onChangeText={text => $formData({ ...formData, name: text })}
          style={lStyles.inputTextField}
          outlineColor={theme.colors.primary}
        />

        <TextInput
          label="Author"
          value={formData.author}
          onChangeText={text => $formData({ ...formData, author: text })}
          style={lStyles.inputTextField}
          outlineColor={theme.colors.primary}
        />

        <Button
          icon="send"
          mode="contained"
          onPress={onSubmit}
        >
          Submit
        </Button>
      </ScreenPreFixHeader>
    </React.Fragment>
  )
}

const lStyles = StyleSheet.create({

  inputTextField: {
    marginBottom: 15,
  }

});

export default Home;