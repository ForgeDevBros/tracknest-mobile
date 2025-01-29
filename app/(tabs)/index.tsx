import { View, Text, ScrollView, Pressable, Image, useColorScheme, TouchableOpacity } from 'react-native';
import { useHomeStyles } from '@/styles/screens/home.styles';
import { PieChart } from 'react-native-gifted-charts';
import { useState } from 'react';
import { router } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
export default function HomeScreen() {
  const theme = useColorScheme() ?? 'dark';
  const styles = useHomeStyles();
  const [selectedSegment, setSelectedSegment] = useState({ text: 'Housing', value: 35 });

  const pieData = [
    { value: 35, text: 'Housing', color: '#FF6B6B' },
    { value: 25, text: 'Food', color: '#4ECDC4' },
    { value: 20, text: 'Transport', color: '#45B7D1' },
    { value: 20, text: 'Others', color: '#96CEB4' }
  ];
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.userInfo}>
              <Image
                style={styles.userImage}
                source={require('@/assets/images/user.png')}
              />
              <View style={styles.userTextContainer}>
                {/* <Text style={styles.welcomeText} onPress={() => router.push('/auth/signup')}>Login</Text> */}
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.nameText}>Hussain, Rashid</Text>
              </View>
            </View>
          </View>
          <View style={styles.balanceCard}>
            <View style={styles.balanceInfo}>
              <View>
                <Text style={styles.balanceLabel}>Expences</Text>
                <Text style={styles.balanceAmount}>$12,850.00</Text>
                <View style={styles.budgetBadge}>
                  <Text style={styles.budgetText}>$ 500 left to budget</Text>
                </View>
              </View>
              <View>
                <PieChart
                  data={pieData}
                  donut
                  radius={45}
                  innerRadius={20}
                  focusOnPress
                  toggleFocusOnPress
                  onPress={(item: any, index: number) => {
                    setSelectedSegment(pieData[index]);
                  }}
                />
                <Text style={styles.chartLabel}>
                  {selectedSegment.text}: {selectedSegment.value}%
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionGrid}>
              {[
                { name: 'Housing', amount: '$2,400', change: '+2.4%' },
                { name: 'Food', amount: '$850', change: '-1.2%' },
                { name: 'Transport', amount: '$350', change: '+0.8%' },
                { name: 'Shopping', amount: '$1,200', change: '+3.4%' }
              ].map((item) => (
                <Pressable key={item.name} style={styles.actionItem}>
                  <Text style={styles.actionText}>{item.name}</Text>
                  <Text style={styles.actionAmmount}>{item.amount}</Text>
                  <Text style={[styles.changeText, { color: item.change.includes('+') ? '#4CAF50' : '#FF5252' }]}>
                    {item.change}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
          <View style={styles.dotsContainer}>
            {[...Array(4)].map((_, index) => (
              <View key={index} style={styles.dot} />
            ))}
          </View>
        </View>



        <View style={styles.recentActivity}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.activityItem}>
              <View style={styles.activityLeft}>
                <Text style={styles.activityTitle}>Shopping Mall</Text>
                <Text style={styles.activityDate}>Today, 14:30</Text>
              </View>
              <Text style={styles.activityAmount}>-$120.00</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/')}
      >
        <IconSymbol name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}


