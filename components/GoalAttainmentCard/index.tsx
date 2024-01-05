import {View, Text, StyleSheet, Image} from 'react-native';
import {useStyles} from './style';
import Divider from '../Common/Divider';
import React from 'react';

const GoalAttainmentCard = ({data}: any) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Goal Attainment</Text>
        <Image source={require('../../assets/chevron-right.png')} />
      </View>
      <View>
        <Text style={styles.labelText}>
          You increased your Goal performance by 5% this month that boosts your
          Revenue by 1.2K.
        </Text>
      </View>
      <View style={styles.metricsOverviewContainer}>
        <View>
          <Image
            source={require('../../assets/Donut-graph.png')}
            style={{height: 150, width: 150}}
          />
        </View>
        <View>
          {data.map((item: any, index: any) => (
            <View key={index}>
              <View style={styles.dataTitleContainer}>
                <Text style={styles.dataLabelText}>{item.title}</Text>
                <View style={styles.statisticsValuesContainer}>
                  <Text
                    style={[styles.highlightAmountText, {color: item.color}]}>
                    {item.value}
                  </Text>
                  <Text>{item.comparison}</Text>
                </View>
              </View>
              {index !== data.length - 1 && <Divider />}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default GoalAttainmentCard;
