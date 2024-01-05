import {View, Text, StyleSheet} from 'react-native';
import {CommonStyles} from '../../utilities/CommonStyles';
import Divider from '../Common/Divider';
import VerticalDivider from '../Common/VerticalDivider';
import {useTheme} from '../../ThemeConfig/ThemeContext';
import {Dimensions} from 'react-native';
import CustomPressable from '../Common/Pressable';
import React from 'react';

const CorePlanCard = ({data, isPressable, text, children}: any) => {
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width - 32;

  const styles = StyleSheet.create({
    cardTitle: {
      color: theme.colors.basePrimary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeMedium,
      fontWeight: theme.typography.medium,
      lineHeight: theme.typography.fontSizeMedium * 1.3,
    },
    textStyle: {
      color: theme.colors.baseSecondary || '#666B7A',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSmall || 14,
      fontWeight: theme.typography.regular || 400,
      lineHeight: theme.typography.fontSizeSmall * 1.4,
    },
    amountText: {
      color: theme.colors.basePrimary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeExtraLarge,
      fontWeight: theme.typography.regular,
      lineHeight: theme.typography.fontSizeExtraLarge * 1.3,
    },
    subAmountText: {
      color: theme.colors.basePrimary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSmall,
      fontWeight: theme.typography.semiBold,
      lineHeight: theme.typography.fontSizeSmall * 1.3,
    },
  });

  return (
    <View
      style={[
        CommonStyles.cardContainer,
        {width: screenWidth, marginRight: 16, marginBottom: 16},
      ]}>
      <Text style={[styles.cardTitle, {marginBottom: theme.spacing.small}]}>
        {data.cardTitle}
      </Text>
      <Text style={[styles.amountText, {marginBottom: theme.spacing.small}]}>
        {data.amountText}
      </Text>
      <View style={CommonStyles.flexRow}>
        {data.sections.map((section: any, index: any) => (
          <View key={index}>
            <View style={CommonStyles.flexRow}>
              <View>
                <Text style={styles.textStyle}>{section.title}</Text>
                <Text style={styles.subAmountText}>{section.value}</Text>
              </View>
              {index !== data.sections.length - 1 && <VerticalDivider />}
            </View>
          </View>
        ))}
      </View>
      {isPressable && <CustomPressable text={text} marginTop={10} />}
      <Divider />
      <View style={CommonStyles.gap}>
        {data.additionalSections.map((additionalSection: any, index: any) => (
          <View
            key={index}
            style={[CommonStyles.flexRow, CommonStyles.spaceBetween]}>
            <Text style={styles.textStyle}>{additionalSection.label}</Text>
            <Text>{additionalSection.value}</Text>
          </View>
        ))}
      </View>
      {children}
    </View>
  );
};

export default CorePlanCard;
