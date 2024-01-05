import {View, Image, Text, StyleSheet} from 'react-native';
import {CommonStyles} from '../../utilities/CommonStyles';
import {useTheme} from '../../ThemeConfig/ThemeContext';
import React from 'react';

function SparkBanner({label, description, isChevron}: any) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    text: {
      color: theme.colors.basePrimary || '#252B41',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeMedium || 14,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium || '500',
      lineHeight: theme.typography.fontSizeMedium * 1.4 || 19.6,
    },
  });

  return (
    <View
      style={[
        CommonStyles.flexRow,
        CommonStyles.spaceBetween,
        CommonStyles.cardContainer,
        CommonStyles.mb1,
        {backgroundColor: '#DFEAF3'},
      ]}>
      <View style={[CommonStyles.flexRow, CommonStyles.gap]}>
        <View
          style={[
            CommonStyles.circle,
            CommonStyles.center,
            {backgroundColor: '#ffffff7f', height: 25, width: 25},
          ]}>
          <Image source={require('../../assets/icon-star.png')} />
        </View>
        <View style={{gap: 5}}>
          <Text style={styles.text}>{label}</Text>
          <Text style={{maxWidth: '95%'}}>{description}</Text>
        </View>
      </View>
      {isChevron && (
        <View>
          <Image source={require('../../assets/chevron-right.png')} />
        </View>
      )}
    </View>
  );
}

export default SparkBanner;
