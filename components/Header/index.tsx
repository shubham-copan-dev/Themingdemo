import {View, Text, Image, TouchableOpacity} from 'react-native';
import {CommonStyles} from '../../utilities/CommonStyles';
import {HeaderStyles} from './style';
import React from 'react';

const Header = ({title, lastUpdated}: any) => {
  const styles = HeaderStyles();

  const handleSettingsPress = () => {
    alert('setting button pressed');
  };

  const handleProfilePress = () => {
    alert('Profile info');
  };

  return (
    <View
      style={[
        CommonStyles.flexRow,
        CommonStyles.flex1,
        CommonStyles.spaceBetween,
        CommonStyles.alignCenter,
        CommonStyles.mb1,
      ]}>
      <View style={{maxWidth: '75%'}}>
        <Text style={styles.dashboardTitle}>{title}</Text>
        <Text>{lastUpdated}</Text>
      </View>
      <View
        style={[
          CommonStyles.flexRow,
          CommonStyles.alignCenter,
          CommonStyles.gap,
        ]}>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Image source={require('../../assets/icon-settings.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfilePress}>
          <View style={styles.circle}>
            <Image
              source={require('../../assets/profile-img.png')}
              style={{width: 50, height: 50}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
