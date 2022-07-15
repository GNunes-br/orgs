import { StyleSheet } from 'react-native';

export default big =>
  StyleSheet.create({
    star: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
      marginRight: 2,
    },
  });
