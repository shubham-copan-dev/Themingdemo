import {View, Text, ImageBackground} from 'react-native';
import {useStyles} from './style';
import {CommonStyles} from '../../utilities/CommonStyles';
import React from 'react';

const CarouselCard = ({
  courseCode,
  eventType,
  year,
  dateRange,
  backgroundImage,
}: any) => {
  const styles = useStyles();

  return (
    <ImageBackground source={backgroundImage} style={styles.cardContainer}>
      <View
        style={[
          CommonStyles.dFlex,
          CommonStyles.flexCol,
          CommonStyles.spaceBetween,
          CommonStyles.height100,
        ]}>
        <View
          style={[
            CommonStyles.dFlex,
            CommonStyles.flexRow,
            CommonStyles.spaceBetween,
          ]}>
          <Text style={styles.whiteText}>{courseCode}</Text>
          <Text style={styles.whiteText}>{eventType}</Text>
        </View>
        <View style={[CommonStyles.dFlex, CommonStyles.gap]}>
          <Text style={styles.yearText}>{year}</Text>
          <Text style={styles.whiteText}>{dateRange}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CarouselCard;
