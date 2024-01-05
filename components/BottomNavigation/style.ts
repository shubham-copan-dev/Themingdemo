import { StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeConfig/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    navigationContainer: {
      backgroundColor: theme.BackgroundColors.Weak,
      width: '100%',
      alignSelf: 'flex-end',
      position: 'fixed',
      bottom: 0,
    },
    navigation: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 25,
    },
    icon: {
      marginBottom: 5,
    },
    text: {
      textAlign: 'center',
      fontSize: 12,
      color: theme.Base.Primary,
    },
    navigationContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
