import {View, Text, Image, Pressable} from 'react-native';
import {CommonStyles} from '../../utilities/CommonStyles';
import Divider from '../Common/Divider';
import VerticalDivider from '../Common/VerticalDivider';
import {useTheme} from '../../ThemeConfig/ThemeContext';
import {Dimensions} from 'react-native';
import {useStyles} from './Style';
import React from 'react';

const AllocationNodeCard = ({
  title,
  totalBookings,
  originalRevenue,
  backlog,
  nonCommBookings,
  revenueMultiplied,
  isPressable,
}: any) => {
  const theme = useTheme();
  const styles = useStyles();
  const screenWidth = Dimensions.get('window').width - 32;

  function alert(arg0: string) {
    alert('hello world');
  }

  return (
    <View
      style={[
        CommonStyles.cardContainer,
        CommonStyles.mr1,
        CommonStyles.mb1,
        {width: screenWidth},
      ]}>
      <Text style={[styles.cardTitle, CommonStyles.mb2]}>{title}</Text>
      <Text style={styles.textStyle}>Total Bookings</Text>
      <Text style={[styles.amountText, {marginBottom: theme.spacing.small}]}>
        {totalBookings}
      </Text>
      <View style={[CommonStyles.flexRow, CommonStyles.spaceBetween]}>
        {/* Dynamic content */}
        <View>
          <View style={CommonStyles.flexRow}>
            <View>
              <Text style={styles.textStyle}>Original Revenue</Text>
              <Text style={[styles.subAmountText, {color: '#4B96C1'}]}>
                {originalRevenue}
              </Text>
            </View>
            <VerticalDivider />
            <View>
              <Text style={styles.textStyle}>Backlog</Text>
              <Text style={[styles.subAmountText, {color: '#37BFA7'}]}>
                {backlog}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Image source={require('../../assets/allocation-node-graph.png')} />
        </View>
      </View>
      <Divider />
      <View style={CommonStyles.gap}>
        {/* More dynamic content */}
        <View style={[CommonStyles.flexRow, CommonStyles.spaceBetween]}>
          <Text style={styles.textStyle}>Non Comm. Bookings</Text>
          <Text>{nonCommBookings}</Text>
        </View>
        <View style={[CommonStyles.flexRow, CommonStyles.spaceBetween]}>
          <Text style={styles.textStyle}>Revenue Multiplied</Text>
          <Text>{revenueMultiplied}</Text>
        </View>
        {/* End of more dynamic content */}
      </View>
      {isPressable && (
        <Pressable
          style={[styles.pressable, CommonStyles.mt1]}
          onPress={() => {
            alert('Button pressed!');
          }}>
          <Text style={styles.pressableText}>View Allocation Summary</Text>
        </Pressable>
      )}
    </View>
  );
};

export default AllocationNodeCard;
