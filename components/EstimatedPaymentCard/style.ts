import { StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeConfig/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    cardContainer: {
      borderRadius: theme.borderRadii.medium,
      backgroundColor: theme.BackgroundColors.Weak,
      padding: 16,
      marginBottom: theme.spacing.medium,
    },
    labelText: {
      color: theme.colors.basePrimary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeMedium,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium,
      lineHeight: theme.typography.fontSizeMedium * 1.3 || 20.8,
    },
    dollarAmount: {
      color: theme.colors.basePrimary,
      fontFamily: 'Poppins',
      fontSize: theme.typography.fontSizeSuperLarge,
      fontWeight: theme.typography.medium,
      fontStyle: 'normal',
      lineHeight: 57.6,
      maxWidth: '80%',
    },
    paymentDateText: {
      color: theme.colors.baseSecondary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSmall,
      fontWeight: theme.typography.medium,
      fontStyle: 'normal',
      lineHeight: theme.typography.fontSizeSmall * 1.3,
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 50,
      overflow: 'hidden',
      backgroundColor: '#4274CF33',
    },
  });
};
