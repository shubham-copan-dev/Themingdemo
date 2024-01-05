import {View, Text} from 'react-native';
import {useStyles} from './style';
import React from 'react';

const AtAGlanceCard = ({title, amount, comparisonText, icon}: any) => {
  const styles = useStyles();

  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.amountText}>{amount}</Text>
        <Text style={styles.comparisonText}>{comparisonText}</Text>
      </View>
    </View>
  );
};

export default AtAGlanceCard;
