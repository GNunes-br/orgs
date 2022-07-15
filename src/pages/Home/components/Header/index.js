import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import headerImage from '../../../../assets/logo.png';

import styles from './styles';

import { loadHeader } from '../../../../services/load-data';

export function Header() {
  const [welcomeText, setWelcomeText] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    const headerData = loadHeader();
    setWelcomeText(headerData.welcomeText);
    setSubtitle(headerData.subtitle);
  }, []);

  return (
    <View style={styles.header}>
      <Image source={headerImage} style={styles.image} />
      <Text style={styles.welcome}>{welcomeText}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
