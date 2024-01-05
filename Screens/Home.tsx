import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header/index';
import EstimatedPaymentCard from '../components/EstimatedPaymentCard';
import CustomCarousel from '../components/Carousel';
import GoalAttainmentCard from '../components/GoalAttainmentCard';
import GlanceCarousel from '../components/GlanceCarousel';
import {useTheme} from '../ThemeConfig/ThemeContext';
import React from 'react';

const Home = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: theme.colors.basePrimary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeLarge,
      fontWeight: theme.typography.semiBold,
      lineHeight: theme.typography.fontSizeLarge * 1.3,
      marginBottom: theme.spacing.small,
    },
  });

  const carouselData = [
    {
      courseCode: 'CS 402',
      eventType: 'Annual',
      year: '2024',
      dateRange: 'Jul 30, 2023 to Jul 27, 2024',
      gradientColors: ['#DA49E7', '#25C1AE'],
      imageurl: '../assets/carousel-1.png',
    },
    {
      courseCode: 'CS 402',
      eventType: 'Semi-Annual:H2',
      year: '2023',
      dateRange: 'Jan 29, 2023 to Jul 29, 2023',
      gradientColors: ['#DA49E7', '#25C1AE'],
      imageurl: '../assets/carousel-2.png',
    },
    {
      courseCode: 'CS 401',
      eventType: 'Annual',
      year: '2022',
      dateRange: 'Jul 30, 2021 to Jul 27, 2022',
      gradientColors: ['#4AFF5C', '#5D4FB2'],
      imageurl: '../assets/carousel-3.png',
    },
  ];

  const glanceData = [
    {
      title: 'Your bookings',
      amount: '5.7 M',
      comparisonText: '15% more than the last month',
    },
    {
      title: 'Wow, hard work paid off! Got Auxiliary Incentive.',
      amount: '14K',
      comparisonText: 'Adds to 15% of your total Revenue',
    },
    {
      title: 'Goal attainment Incentive',
      amount: '27.43K',
      comparisonText: '15% more than the last month',
    },
    {
      title: 'Goal sheet performance',
      amount: '+23%',
      comparisonText: 'compared to last Goal sheet',
    },
  ];

  const goalAttainmentData = [
    {
      title: 'PRD & Service Annual',
      value: '14.57M',
      comparison: '/ 7.51M',
      color: theme.Charts.Chart2 || '#37BFA7',
    },
    {
      title: 'RWS RND',
      value: '3.54M',
      comparison: '/ 1.50M',
      color: '#4B96C1',
    },
  ];

  return (
    <View>
      <Header title="Home" lastUpdated="Updated 11 hours ago" />
      <EstimatedPaymentCard
        labelText="Estimated payment"
        dollarAmount="12,240.50"
        paymentDateText="Next payment date is Dec 30, 2023"
      />

      {/*carousel setion starts form here*/}
      {/*<CustomCarousel data={carouselData} />*/}
      {/*carousel setion ends here*/}

      <GoalAttainmentCard data={goalAttainmentData} />
      <Text style={styles.text}>Highlights</Text>
      <GlanceCarousel glanceData={glanceData} />
    </View>
  );
};

export default Home;
