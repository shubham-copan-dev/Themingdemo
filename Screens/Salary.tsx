import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {CommonStyles} from '../utilities/CommonStyles';
import {useTheme} from '../ThemeConfig/ThemeContext';
import SalaryCard from '../components/SalaryCard';
import React from 'react';

const SalaryScreen = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    baseSalary: {
      color: theme.colors.basePrimary || '#252B41',
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily || 'Poppins',
      fontSize: theme.typography.fontSizeMedium || 18,
      fontStyle: 'normal',
      fontWeight: theme.typography.semiBold || '600',
      lineHeight: theme.typography.fontSizeMedium * 1.3 || 23.4,
    },
    salaryText: {
      color: theme.colors.basePrimary || '#252B41',
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily || 'Poppins',
      fontSize: theme.typography.fontSizeTitle || 36,
      fontStyle: 'normal',
      fontWeight: theme.typography.semiBold || '600',
      lineHeight: theme.typography.fontSizeTitle * 1.3 || 46.8,
    },
    labelText: {
      color: theme.Base.Primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSizeMedium,
      fontStyle: 'normal',
      fontWeight: theme.typography.semiBold,
      lineHeight: theme.typography.fontSizeMedium * 1.3,
      marginBottom: theme.spacing.small,
    },
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

  const salaryDetailData = [
    {
      title: 'Pay mix as per comp plan',
      data: [
        {label: 'Base Salary %', value: '40%'},
        {label: 'Variable Pay %', value: '60%'},
        {label: 'Plan Proration Type', value: 'Annual'},
        {label: 'Goaling Fiscal Interval', value: 'Annual'},
      ],
    },
    {
      title: 'Quota CAP',
      data: [{label: 'None'}],
    },
    {
      title: 'Days',
      data: [
        {label: 'Days on Goal Sheet', value: '364'},
        {label: 'Leave of Absence days', value: '0'},
        {label: 'Active Days', value: '364'},
      ],
    },
  ];

  return (
    <View>
      <Header
        title="Payments"
        lastUpdated="As of Nov 20, 2023 at 5:54AM PST.Values in USD"
      />
      <View
        style={[
          CommonStyles.cardContainer,
          CommonStyles.center,
          CommonStyles.mb1,
          {gap: theme.spacing.moderate},
        ]}>
        <Text style={styles.baseSalary}>Base Salary</Text>
        <Text style={styles.salaryText}>123,433.61</Text>
        <Text style={styles.secondaryTextStyle}>
          Last change on Nov 01, 2023
        </Text>
      </View>
      <View>
        {salaryDetailData.map((section, index) => (
          <View key={index}>
            <Text style={styles.labelText}>{section.title}</Text>
            <SalaryCard data={section.data} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default SalaryScreen;
