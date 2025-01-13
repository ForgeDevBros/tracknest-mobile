import { View, Text, ScrollView, TextInput, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useExploreStyles } from '@/styles/screens/explore.styles';
export default function ExploreScreen() {
  const theme = useColorScheme() ?? 'dark';
  const styles = useExploreStyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <View style={styles.searchContainer}>
          <IconSymbol name="house.fill" size={20} color={Colors[theme].icon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search transactions..."
            placeholderTextColor={Colors[theme].icon}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {['Food', 'Shopping', 'Transport', 'Bills', 'Entertainment'].map((category) => (
              <View key={category} style={styles.categoryItem}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Monthly Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Income</Text>
              <Text style={styles.statAmount}>$3,450</Text>
              <Text style={styles.statChange}>+12%</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Expenses</Text>
              <Text style={styles.statAmount}>$2,850</Text>
              <Text style={[styles.statChange, styles.negativeChange]}>-8%</Text>
            </View>
          </View>
        </View>

        <View style={styles.trendsSection}>
          <Text style={styles.sectionTitle}>Spending Trends</Text>
          {['Shopping', 'Groceries', 'Transport'].map((category) => (
            <View key={category} style={styles.trendItem}>
              <View style={styles.trendInfo}>
                <Text style={styles.trendCategory}>{category}</Text>
                <Text style={styles.trendAmount}>$340.00</Text>
              </View>
              <View style={styles.trendBar}>
                <View style={[styles.trendProgress, { width: '60%' }]} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}