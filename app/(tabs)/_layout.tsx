import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="calculator"
        options={{
          title: '계산기',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calculator" color={color} />,
        }}
      />
      <Tabs.Screen
        name="findings"
        options={{
          title: '찾기',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-signs" color={color} />,
        }}
      />
    </Tabs>
  );
}
