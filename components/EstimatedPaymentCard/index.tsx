import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {CommonStyles} from '../../utilities/CommonStyles';
import {useTheme} from '../../ThemeConfig/ThemeContext';
import {useStyles} from './style';
import React from 'react';

const EstimatedPaymentCard = ({
  labelText,
  dollarAmount,
  paymentDateText,
}: any) => {
  const styles = useStyles();
  const onPress = () => {
    alert('button pressed');
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.labelText}>{labelText}</Text>
      <Pressable onPress={onPress}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.dollarAmount}>{dollarAmount}</Text>
          <View style={[styles.circle, CommonStyles.center]}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </View>
        <Text style={styles.paymentDateText}>{paymentDateText}</Text>
      </Pressable>
    </View>
  );
};

export default EstimatedPaymentCard;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
