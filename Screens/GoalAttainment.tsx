import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import CorePlanCard from '../components/CorePlanCard';
import AllocationNodeCard from '../components/AllocationNodeCard/index';
import GoalSheetSliderButton from '../components/GoalSheetSliderButton';
import SparkBanner from '../components/Common/SparkBanner';
import VerticalDivider from '../components/Common/VerticalDivider';
import {CommonStyles} from '../utilities/CommonStyles';
import {useTheme} from '../ThemeConfig/ThemeContext';

const GoalAttainmentScreen = () => {
  const theme = useTheme();

  const corePlanData = [
    {
      cardTitle: 'RSW & CX-SVC IACV | AG | NPV',
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
    },
    {
      cardTitle: 'RSW RND | NPD',
      amountText: '985.84K',
      sections: [
        {title: 'Goal', value: '5.20M'},
        {title: 'To Go', value: '4.21M'},
        {title: 'Weight', value: '20%'},
        {title: 'Backlog', value: '94.96K'},
      ],
      additionalSections: [
        {label: 'Orignal Revenue', value: '4,325,240.15'},
        {label: 'Revenue Multiplied', value: '4,325,240.15'},
        {label: 'Revenue Attainment', value: '19.8%'},
      ],
    },
  ];

  const allocationData = [
    {
      title: 'Direct Orders',
      totalBookings: '4,321,470.37',
      originalRevenue: '4,062,973.35',
      backlog: '258,497.02',
      nonCommBookings: '00',
      revenueMultiplied: '4,062,973.35',
    },
    {
      title: 'POS Orders',
      totalBookings: '7,420,849.37',
      originalRevenue: '5,984,509.35',
      backlog: '143,633.02',
      nonCommBookings: '00',
      revenueMultiplied: '5,984,509.84',
    },
    {
      title: 'XAAS Orders',
      totalBookings: '1,759,988.00',
      originalRevenue: '5,984,509.35',
      backlog: '143,633.02',
      nonCommBookings: '00',
      revenueMultiplied: '5,984,509.84',
    },
    {
      title: 'Credit/Debit Memos rebates without so reference',
      totalBookings: '-161.05',
      originalRevenue: '5,984,509.35',
      backlog: '143,633.02',
      nonCommBookings: '00',
      revenueMultiplied: '5,984,509.84',
    },
    {
      title: 'Booking adjustments',
      totalBookings: '481.70',
      originalRevenue: '00',
      backlog: '00',
      nonCommBookings: '00',
      revenueMultiplied: '00',
    },
    {
      title: 'Manuel Revenue',
      totalBookings: '00',
      originalRevenue: '414.50',
      backlog: '00',
      nonCommBookings: '00',
      revenueMultiplied: '414.50',
    },
    {
      title: 'Revenue Adjustment',
      totalBookings: '00',
      originalRevenue: '00',
      backlog: '00',
      nonCommBookings: '00',
      revenueMultiplied: '00',
    },
  ];

  const nodeSummaryData = {
    title: 'SOUTH EAST RETAIL SELECT (DIRECT)',
    totalBookings: '13,502,561.61',
    originalRevenue: '11,648,063.78',
    backlog: '1,854,497.83',
    nonCommBookings: '00',
    revenueMultiplied: '11,648,063.78',
  };

  const goalSheetData = [
    {
      label: 'Goal',
      amount: '5.20M',
      bulletColor: '#C3ECE4',
    },
    {
      label: 'Bookings',
      amount: '985.84K',
      bulletColor: '#37BFA7',
    },
    {
      label: 'Revenue',
      amount: '890,876.25',
      bulletColor: '#4B96C1',
    },
    {
      label: 'Backlog',
      amount: '94.96K',
      bulletColor: '#C3ECE4',
    },
  ];

  const styles = StyleSheet.create({
    text: {
      color: theme.colors.basePrimary || '#252B41',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeLarge || 18,
      fontStyle: 'normal',
      fontWeight: theme.typography.semiBold || 600,
      lineHeight: theme.typography.fontSizeLarge * 1.3,
    },
    amountText: {
      color: '#37BFA7',
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSuperLarge || 36,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium || '500',
      lineHeight: theme.typography.fontSizeSuperLarge * 1.3 || 46.8,
    },
    subAmountText: {
      color: theme.Base.Primary || '#252B41',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeMedium || 16,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium || '500',
      lineHeight: theme.typography.fontSizeMedium * 1.3 || 20.8,
    },
    bullet: {
      height: 10,
      width: 10,
      borderRadius: 50,
    },
  });

  const renderData = goalSheetData.map((item, index) => (
    <React.Fragment key={index}>
      <View style={{gap: 10, flex: 1, alignItems: 'center'}}>
        <View style={[CommonStyles.flexRow, CommonStyles.center, {gap: 5}]}>
          <View style={[{backgroundColor: item.bulletColor}, styles.bullet]} />
          <Text>{item.label}</Text>
        </View>
        <Text style={styles.subAmountText}>{item.amount}</Text>
      </View>
      {index !== goalSheetData.length - 1 && <VerticalDivider />}
    </React.Fragment>
  ));

  return (
    <View>
      <Header
        title="Goal Attainment"
        lastUpdated="Updated 11 hours ago.Values in USD"
      />

      <View
        style={{
          backgroundColor: theme.BackgroundColors.Weak,
          marginBottom: theme.spacing.medium,
        }}>
        <GoalSheetSliderButton />
        <View style={[CommonStyles.center, CommonStyles.gap, CommonStyles.mb1]}>
          <Text>Product and Service</Text>
          <Text style={styles.amountText}>13.35M</Text>
          <Text>Day 24 of 364</Text>
        </View>
        <View style={[CommonStyles.center, CommonStyles.mb1]}>
          <Image
            source={require('../assets/Donut-main-KPI.png')}
            style={{height: 200, width: 200}}
          />
        </View>
        <View style={[CommonStyles.flexRow, CommonStyles.mb2]}>
          {renderData}
        </View>
        <SparkBanner
          label="Booking to Revenue Backlog"
          description="This is a placeholder text for backlog data."
          isChevron={true}
        />
      </View>

      <Text style={[CommonStyles.mb1, styles.text]}>Core Plan Elements</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {corePlanData.map((item, index) => (
          <View key={index}>
            <CorePlanCard data={item} />
          </View>
        ))}
      </ScrollView>

      <Text style={[CommonStyles.mb1, styles.text]}>Allocation Summary</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {allocationData.map((item, index) => (
          <View key={index}>
            <AllocationNodeCard {...item} />
          </View>
        ))}
      </ScrollView>

      <Text style={[CommonStyles.mb1, styles.text]}>Node Summary</Text>
      <AllocationNodeCard {...nodeSummaryData} isPressable={true} />
    </View>
  );
};

export default GoalAttainmentScreen;
