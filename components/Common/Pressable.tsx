import {Pressable, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../ThemeConfig/ThemeContext';
import React from 'react';

const CustomPressable = ({
  onPress,
  text,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
}: any) => {
  const theme = useTheme();
  const defaultMargin = 0;

  const styles = StyleSheet.create({
    pressable: {
      paddingVertical: theme.spacing.XS || 8,
      paddingHorizontal: theme.spacing.S || 12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
      alignSelf: 'stretch',
      borderRadius: theme.spacing.XS || 8,
      backgroundColor: 'rgba(66, 116, 207, 0.20)',
      marginTop: marginTop || defaultMargin,
      marginBottom: marginBottom || defaultMargin,
      marginLeft: marginLeft || defaultMargin,
      marginRight: marginRight || defaultMargin,
      marginVertical: 16 || defaultMargin,
      marginHorizontal: marginHorizontal || defaultMargin,
    },
    text: {
      color: theme.PrimaryActions.Main || '#4274CF',
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeSmall || 14,
      fontStyle: 'normal',
      fontWeight: theme.typography.regular || '400',
      lineHeight: theme.typography.fontSizeSmall * 1.4 || 19.6,
    },
  });

  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomPressable;
