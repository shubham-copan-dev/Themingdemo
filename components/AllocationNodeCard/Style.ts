import { StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeConfig/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
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
      color: theme.Charts.Chart2,
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
    pressable: {
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      alignSelf: 'stretch',
      borderRadius: 8,
      backgroundColor: 'rgba(66, 116, 207, 0.20)',
    },
    pressableText: {
      color: '#4274CF',
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 19.6,
    },
  });
};
