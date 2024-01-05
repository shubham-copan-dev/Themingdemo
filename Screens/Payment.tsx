import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import {CommonStyles} from '../utilities/CommonStyles';
import CustomPressable from '../components/Common/Pressable';
import GoalSheetSliderButton from '../components/GoalSheetSliderButton';
import SparkBanner from '../components/Common/SparkBanner';
import CorePlanCard from '../components/CorePlanCard';
import {useTheme} from '../ThemeConfig/ThemeContext';
import Divider from '../components/Common/Divider';
import ProgressBar from '../components/Common/ProgressBar';
import React from 'react';

const PaymentComponent = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    heading: {
      color: theme.Base.Primary || '#252B41',
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeMedium || 18,
      fontStyle: 'normal',
      fontWeight: theme.typography.semiBold || '600',
      lineHeight: theme.typography.fontSizeMedium * 1.3 || 23.4,
    },
    paymentText: {
      color: theme.Charts.Chart2 || '#4B96C1',
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeExtraLarge || 36,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium || '500',
      lineHeight: theme.typography.fontSizeExtraLarge * 1.3 || 46.8,
    },
    incentiveCardHeading: {
      color: 'theme.Base.Primary',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSmall || 16,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium || '500',
      lineHeight: theme.typography.fontSizeSmall * 1.3 || 20.8,
    },
    incentiveDetail: {
      color: theme.Base.Secondary || '#666B7A',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSmall || 14,
      fontStyle: 'normal',
      fontWeight: theme.typography.regular || '400',
      lineHeight: theme.typography.fontSizeSmall * 1.4 || 19.6,
    },
    subPaymentText: {
      color: theme.Base.Primary || '#252B41',
      fontFamily: theme.typography.fontFamily,
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: theme.typography.regular || '400',
      lineHeight: 39,
    },
  });
  const corePlanData = {
    cardTitle: 'PRD & SVC Annual | AGI PRI',
    amountText: '2.57M',
    sections: [
      {title: 'Goal', value: '9.51M'},
      {title: 'To Go', value: '6.94M'},
      {title: 'Weight', value: '60%'},
      {title: 'Backlog', value: '1.77M'},
    ],
    additionalSections: [
      {label: 'Orignal Revenue', value: '4,325,240.15'},
      {label: 'Revenue Multiplied', value: '4,325,240.15'},
      {label: 'Revenue Attainment', value: '19.8%'},
    ],
  };

  return (
    <View>
      <Header
        title="Payments"
        lastUpdated="As of Nov 20, 2023 at 5:54AM PST.Values in USD"
      />
      <View style={{backgroundColor: '#fff'}}>
        <View
          style={[
            CommonStyles.center,
            CommonStyles.gap,
            CommonStyles.mb1,
            CommonStyles.mt1,
          ]}>
          <Text style={styles.heading}>Estimated payment as of December</Text>
          <Text>Next payment date is Dec 30, 2023</Text>
          <Text style={styles.paymentText}>12,243.19</Text>
          <View style={[CommonStyles.flexRow, {gap: 10}]}>
            <Image source={require('../assets/icon-lock.png')} />
            <Text>Payment Locked</Text>
          </View>
        </View>
        <View style={CommonStyles.mb1}>
          <Image
            source={require('../assets/Payment-graph.png')}
            style={{height: 250, width: '100%'}}
          />
        </View>
        <CustomPressable text="Payment History" marginBottom={16} />
        <CustomPressable text="Regional payment schedule" marginBottom={16} />
      </View>
      <GoalSheetSliderButton />
      <SparkBanner
        label="Highlights"
        description="This is a placeholder text. There is some change in Plan which is highlighted here to better visibility."
      />
      <View
        style={[
          CommonStyles.cardContainer,
          CommonStyles.mb1,
          CommonStyles.gap,
        ]}>
        <View>
          <Text style={styles.incentiveCardHeading}>Incentives</Text>
          <Text style={styles.incentiveDetail}>
            You have a low incentive capture as compared to your average
            performance.
          </Text>
        </View>
        <View>
          <Text style={styles.incentiveDetail}>GPTD Incentives</Text>
          <Text style={styles.subPaymentText}>12,099.75</Text>
        </View>
        <ProgressBar width="17.4%" backgroundColor="#37BFA7" />
        <View>
          <Text>Target Incentive</Text>
          <Text style={styles.subPaymentText}>162,500.00</Text>
        </View>
        <ProgressBar width="90.4%" />
        <Divider />
        <CustomPressable text="Incentive Breakdown" />
      </View>

      <CorePlanCard data={corePlanData} isPressable={true} text="Attainment">
        <View
          style={[
            CommonStyles.cardContainer,
            CommonStyles.flexRow,
            CommonStyles.gap,
            CommonStyles.mt1,
            {backgroundColor: '#3DD3701A'},
          ]}>
          <View>
            <Image source={require('../assets/icon-camera.png')} />
          </View>
          <View style={CommonStyles.flex1}>
            <View style={[CommonStyles.flexRow, CommonStyles.spaceBetween]}>
              <View>
                <Text>Check your GPTD Incentives</Text>
                <Text>12,099.75</Text>
              </View>
              <View>
                <Image source={require('../assets/chevron-right.png')} />
              </View>
            </View>
            <Divider />
            <View
              style={[
                CommonStyles.flexRow,
                CommonStyles.spaceBetween,
                CommonStyles.mb1,
              ]}>
              <Text>GPTD Paid</Text>
              <Text>9,677.67</Text>
            </View>
            <ProgressBar width="90.4%" marginBottom={16} />
            <Text>Payment you will get is 6,666.38</Text>
          </View>
        </View>
      </CorePlanCard>
    </View>
  );
};

export default PaymentComponent;
