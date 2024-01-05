import { StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeConfig/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      padding: theme.spacing.medium || 16,
      marginBottom: theme.spacing.extraLarge || 34,
      alignSelf: 'stretch',
      borderRadius: theme.borderRadii.large || 24,
      backgroundColor: theme.colors.bgLite || '#FFF',
      gap: theme.spacing.medium || 16,
    },
    header: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: theme.spacing.small,
    },
    labelText: {
      color: theme.colors.baseSecondary || '#666B7A',
      fontFamily: theme.typography.fontFamily || 'Poppins',
      fontSize: theme.typography.fontSizeSmall || 14,
      fontStyle: 'normal',
      fontWeight: theme.typography.regular || '400',
      lineHeight: theme.typography.fontSizeSmall * 1.4 || 19.6,
    },
    metricsOverviewContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    dataTitleContainer: {
      gap: theme.spacing.small || 8,
    },
    dataLabelText: {
      color: theme.colors.baseSecondary || '#666B7A',
      fontFamily: theme.typography.fontFamily || 'Poppins',
      fontSize: theme.typography.fontSizeSmall || 14,
      fontStyle: 'normal',
      fontWeight: theme.typography.regular || '400',
      lineHeight: theme.typography.fontSizeSmall * 1.4 || 19.6,
    },
    statisticsValuesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    highlightAmountText: {
      color: theme.Charts.Chart2,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeExtraLarge,
      fontStyle: 'normal',
      fontWeight: theme.typography.regular,
      lineHeight: theme.typography.fontSizeExtraLarge * 1.3 || 39,
    },
  });
};
