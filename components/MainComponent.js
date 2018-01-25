import React from 'react';
import {View} from 'react-native';

import {AppNavigator} from '../routers';

const MainComponent = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default MainComponent;