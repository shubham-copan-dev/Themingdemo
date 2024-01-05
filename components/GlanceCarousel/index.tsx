import {View, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '../../ThemeConfig/ThemeContext';
import AtAGlanceCard from '../AtAGlanceCard';
import React from 'react';

const GlanceCarousel = ({glanceData}: any) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    carouselContainer: {
      flexDirection: 'row',
      gap: theme.spacing.medium,
      marginBottom: theme.spacing.medium,
    },
  });

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.carouselContainer}>
        {glanceData.map((item: any, index: any) => (
          <AtAGlanceCard
            key={index}
            title={item.title}
            amount={item.amount}
            comparisonText={item.comparisonText}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default GlanceCarousel;
