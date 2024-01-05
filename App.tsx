import {ScrollView, SafeAreaView, StyleSheet, Platform} from 'react-native';
import Home from './Screens/Home';
import GoalAttainmentScreen from './Screens/GoalAttainment';
import Payment from './Screens/Payment';
import SalaryScreen from './Screens/Salary';
import {ThemeProvider} from './ThemeConfig/ThemeContext';
import BottomNavigation from './components/BottomNavigation';
import React from 'react';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EFF5F9',
      flex: 1,
    },
  });
  // if (Platform.OS === 'android') {
  //   styles.container.paddingTop = 20;
  // }

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{padding: 16, marginBottom: 25}}>
          {/*<Home />*/}
          {/*<GoalAttainmentScreen />*/}
          {/*<Payment />*/}
          {/*<SalaryScreen />*/}
          <GoalAttainmentScreen />
        </ScrollView>
        <BottomNavigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}
