import React from 'react';
import {View} from 'react-native';

const ProgressBar = ({
  width,
  backgroundColor,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: any) => {
  const defaultWidth = '100%';
  const defaultBackgroundColor = '#6CC6D4';
  const defaultMargin = 0;

  const styles = {
    container: {
      width: width || defaultWidth,
      height: 20,
      borderRadius: 4,
      backgroundColor: backgroundColor || defaultBackgroundColor,
      marginTop: marginTop || defaultMargin,
      marginBottom: marginBottom || defaultMargin,
      marginLeft: marginLeft || defaultMargin,
      marginRight: marginRight || defaultMargin,
    },
  };

  return <View style={styles.container} />;
};

export default ProgressBar;
