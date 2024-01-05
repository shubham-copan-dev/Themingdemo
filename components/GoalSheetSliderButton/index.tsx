import {View, Text, Pressable, Image, ImageBackground} from 'react-native';
import {CommonStyles} from '../../utilities/CommonStyles';
import React from 'react';

const GoalSheetSliderButton = () => {
  return (
    <ImageBackground
      source={require('../../assets/slider-btn-bg.png')}
      style={[
        CommonStyles.flexRow,
        CommonStyles.spaceBetween,
        CommonStyles.alignCenter,
        CommonStyles.flex1,
        {borderRadius: 8, overflow: 'hidden', marginBottom: 16},
      ]}>
      <Pressable
        style={[
          {
            backgroundColor: '#33333333',
            paddingVertical: 10,
            width: '10%',
          },
          CommonStyles.center,
        ]}>
        <Image source={require('../../assets/btn-chevron-left.png')} />
      </Pressable>
      <Text style={{width: '65%', textAlign: 'center'}}>
        Goal Sheet:CS402, Jul 30, 2023 to Jul 27, 2024
      </Text>
      <Pressable
        style={[
          {
            backgroundColor: '#33333333',
            paddingVertical: 10,
            maxWidth: '10%',
          },
          CommonStyles.flex1,
          CommonStyles.center,
        ]}>
        <Image source={require('../../assets/btn-chevron-right.png')} />
      </Pressable>
    </ImageBackground>
  );
};

export default GoalSheetSliderButton;
