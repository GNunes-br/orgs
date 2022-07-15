import React from 'react';
import { FlatList, Text } from 'react-native';

import styles from './styles';

import { useProducers } from '../../../../hooks';
import { Producer } from '../Producer';

export function Producers({ header: Header }) {
  const [title, producers] = useProducers();

  const listHeader = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={producers}
      keyExtractor={({ name }) => name}
      renderItem={({ item }) => <Producer {...item} />}
      ListHeaderComponent={listHeader}
    />
  );
}
