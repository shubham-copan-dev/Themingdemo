import {View, StyleSheet, Easing} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCard from '../CarouselCard';
import React from 'react';

const CustomCarousel = ({data}: any) => {
  const renderItem = ({item}: any) => {
    let backgroundImage;

    switch (item.imageurl) {
      case '../assets/carousel-1.png':
        backgroundImage = require('../../assets/carousel-1.png');
        break;
      case '../assets/carousel-2.png':
        backgroundImage = require('../../assets/carousel-2.png');
        break;
      case '../assets/carousel-3.png':
        backgroundImage = require('../../assets/carousel-3.png');
        break;
      default:
        backgroundImage = null;
    }

    const getImage = () => {
      return require(item.imageurl);
    };

    return (
      <CarouselCard
        courseCode={item.courseCode}
        eventType={item.eventType}
        year={item.year}
        dateRange={item.dateRange}
        backgroundImage={getImage()}
      />
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout="default"
        inactiveSlideScale={0.95}
        // animationOptions={{
        //   duration: 500,
        //   easing: Easing.inOut(Easing.ease),
        // }}
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default CustomCarousel;
