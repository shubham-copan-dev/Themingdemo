import { StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeConfig/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    cardContainer: {
      backgroundColor: theme.BackgroundColors.Weak,
      borderRadius: theme.borderRadii.medium,
      height: 200,
      paddingVertical: theme.spacing.moderate,
      paddingHorizontal: theme.spacing.larger,
      marginBottom: theme.spacing.medium,
      color: theme.colors.bgLite,
      overflow: 'hidden',
    },
    yearText: {
      color: theme.colors.bgLite,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeTitle,
      fontWeight: theme.typography.medium,
      lineHeight: theme.typography.fontSizeTitle * 1.3,
    },
    whiteText: {
      color: theme.colors.bgLite,
    },
  });
};
