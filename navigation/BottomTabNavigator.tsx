/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types';
import Icon from '../components/Icon';
import { bottomNavScreenConfig, IBottomNavScreenConfig } from '../configs/navConfigs';
import { styleConfigs } from '../configs/styleConfigs';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: styleConfigs.primaryColor,
        showLabel: false,
      }}>
      {bottomNavScreenConfig.map((item: IBottomNavScreenConfig) => {
        return (
          <BottomTab.Screen
            key={`${item.name}-screen`}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ color }) => <Icon name={item.icon} color={color} />
            }}
          />
        )
      })}
    </BottomTab.Navigator>
  );
}