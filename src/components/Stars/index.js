import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';

import { Star } from '../Star';

export function StarsComponent({
  evaluation: oldEvaluation,
  editable = false,
  big = false,
}) {
  const [evaluation, setEvaluation] = useState(oldEvaluation);

  const renderStars = () => {
    const starList = [];
    for (let count = 0; count < 5; count++) {
      starList.push(
        <Star
          key={count}
          onPress={() => setEvaluation(count + 1)}
          completed={count < evaluation}
          disabled={!editable}
          big={big}
        />,
      );
    }

    return starList;
  };

  return <View style={styles.stars}>{renderStars()}</View>;
}
