import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalDivider = () => {
  return <View style={styles.verticalDivider} />;
};

const styles = StyleSheet.create({
  verticalDivider: {
    backgroundColor: '#DFEAF3',
    marginHorizontal: 8,
    width: 1,
    alignSelf: 'stretch',
  },
});

export default VerticalDivider;
