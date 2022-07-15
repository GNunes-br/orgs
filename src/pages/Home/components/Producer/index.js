import React, { useMemo, useReducer } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { StarsComponent } from '../../../../components';

import styles from './styles';

const distanceInMeters = distance => {
  return `${distance}m`;
};

export function Producer({ name, image, distance, evaluation }) {
  const [selected, invertSelection] = useReducer(
    newSelected => !newSelected,
    false,
  );

  const distanceText = useMemo(() => distanceInMeters(distance), [distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={invertSelection}>
      <Image source={image} accessibilityLabel={name} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <StarsComponent
            evaluation={evaluation}
            editable={selected}
            big={selected}
          />
        </View>
        <Text style={styles.distance}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  );
}
