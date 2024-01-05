import {View, Text, Image} from 'react-native';
import {useStyles} from './style';
import React from 'react';

const BottomNavigation = () => {
  const styles: any = useStyles();

  return (
    <View style={styles.navigationContainer}>
      <View style={styles.navigation}>
        <View style={styles.navigationContent}>
          <Image
            source={require('../../assets/icon-homee.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.navigationContent}>
          <Image
            source={require('../../assets/icon-Trophee.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Goal Attainment</Text>
        </View>
        <View style={styles.navigationContent}>
          <Image
            source={require('../../assets/icon-Suitcase-payment.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Payments</Text>
        </View>
        <View style={styles.navigationContent}>
          <Image
            source={require('../../assets/search-icon.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Search</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomNavigation;
