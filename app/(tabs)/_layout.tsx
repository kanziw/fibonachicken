import { useTheme } from '@/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const { navigationHeaderStyle, navigationTabBarStyle } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        ...navigationHeaderStyle,
        ...navigationTabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '계산기',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calculator" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
