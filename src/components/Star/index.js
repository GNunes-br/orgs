import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import grayStarImage from '../../assets/gray-star.png';
import starImage from '../../assets/star.png';

import defaultStyles from './styles';

export function Star({ onPress, disabled = true, completed, big = false }) {
  const styles = defaultStyles(big);

  const getImage = () => {
    if (completed) {
      return starImage;
    } else {
      return grayStarImage;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  );
}
