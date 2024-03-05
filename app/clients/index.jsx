import { gql, useQuery } from '@apollo/client';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Button, useTheme, Avatar, Card, Text } from 'react-native-paper';
import ScreenPreFix from '../../components/ScreenPreFix';

// @ts-ignore
// import styles from './ClientIndex.style';

const GET_BOOKS = gql`
  query{
    getBooks{
      name
      author
    }
  }
`;

const ClientIndex = (props) => {

  //useEffect
  React.useEffect(() => {
  }, []);

  // ===CUSTOM===
  const theme = useTheme();

  const { loading, data, error } = useQuery(GET_BOOKS, {
    onError(err) {
      console.log('client page', err.message)
    }
  });

  if (error) return <Text>Something went wrong</Text>;

  // __DOM__

  return (
    <React.Fragment>
      <ScreenPreFix>

        <Button
          icon="send"
          mode="contained"
          onPress={() => router.back()}
        >
          Go back from client
        </Button>

        {
          loading ?
            <ActivityIndicator size="large" color={theme.colors.primary} /> :
            <FlatList
              data={data?.getBooks}
              renderItem={({ item }) => (
                // <Text style={{ color: theme.colors.secondary }}>{item.name} - {item.author}</Text>
                <Card style={{ marginVertical: 15, paddingVertical: 10 }} mode="elevated">
                  <Card.Title title={item.name} subtitle={item.author} />
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                  <Card.Content>
                    <Text variant="titleLarge">{item.name}</Text>
                    <Text variant="bodyMedium">{item.name} - {item.author}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                  </Card.Actions>
                </Card>
              )}
            />
        }

      </ScreenPreFix>
    </React.Fragment>
  )
}

export default ClientIndex;