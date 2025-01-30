import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSession } from '@/context/AuthContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isLoading, session } = useSession() ?? {};

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href="/auth/login" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarItemStyle: {
          height: 70,
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 30,
            height: 70,
            backgroundColor: Colors[colorScheme ?? 'light'].cardItem,
            elevation: 5,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: 'Expanses',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="dollarsign.circle.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pennyChat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}
