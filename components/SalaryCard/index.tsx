import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CommonStyles} from '../../utilities/CommonStyles';
import Divider from '../Common/Divider';
import {useTheme} from '../../ThemeConfig/ThemeContext';

function SalaryCard({data}: any) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    secondaryTextStyle: {
      color: theme.colors.baseSecondary || '#666B7A',
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily || 'Poppins',
      fontSize: theme.typography.fontSizeSmall || 12,
      fontStyle: 'normal',
      fontWeight: theme.typography.medium || '500',
      lineHeight: theme.typography.fontSizeSmall * 1.3 || 15.6,
    },
  });
  return (
    <View style={[CommonStyles.cardContainer, CommonStyles.mb1]}>
      {data.map((item: any, index: any) => (
        <React.Fragment key={index}>
          <View style={[CommonStyles.flexRow, CommonStyles.spaceBetween]}>
            <Text style={styles.secondaryTextStyle}>{item.label}</Text>
            <Text>{item.value}</Text>
          </View>
          {index < data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </View>
  );
}

export default SalaryCard;
