import { StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeConfig/ThemeContext';

export const HeaderStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow:'hidden'
  },
  dashboardTitle:{
    fontSize:theme.typography.fontSizeExtraLarge,
    fontWeight:theme.typography.bold
  }
  });
};