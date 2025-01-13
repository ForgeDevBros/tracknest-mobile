import { View, Text, ScrollView, Pressable, Image, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useHomeStyles } from '@/styles/screens/home.styles';
import { router } from 'expo-router';
export default function HomeScreen() {
  const theme = useColorScheme() ?? 'dark';
  const styles = useHomeStyles();

  return (
    <ScrollView style={styles.container}>
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
              <Text style={styles.nameText}>John Doe</Text>
            </View>
          </View>
        </View>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$12,850.00</Text>
          <View style={styles.balanceChange}>
            <Text style={styles.changeText}>+2.4%</Text>
            <Text style={styles.periodText}>this month</Text>
          </View>
        </View>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          {['Add Income', 'Add Expense', 'Transfer', 'Bills'].map((action) => (
            <Pressable key={action} style={styles.actionItem}>
              <View style={styles.actionIcon}>
                <IconSymbol name="house.fill" size={24} color={Colors[theme].tint} />
              </View>
              <Text style={styles.actionText}>{action}</Text>
            </Pressable>
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
  );
}


