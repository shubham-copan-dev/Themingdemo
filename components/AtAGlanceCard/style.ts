import { StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeConfig/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    cardContainer: {
      display: 'flex',
      width: 175,
      height: 200,
      padding: theme.spacing.regular,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderRadius: theme.borderRadii.large,
      backgroundColor: theme.colors.bgLite,
      shadowColor: '#E9EEF2',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5,
    },
    titleText: {
      color: theme.colors.basePrimary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeMedium,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium,
      lineHeight: theme.typography.fontSizeMedium * 1.4,
    },
    amountText: {
      color: theme.colors.basePrimary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeTitle,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium,
      lineHeight: theme.typography.fontSizeTitle * 1.3,
    },
    comparisonText: {
      color: theme.colors.baseSecondary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSmall,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium,
      lineHeight: theme.typography.fontSizeSmall * 1.3,
    },
  });
};
