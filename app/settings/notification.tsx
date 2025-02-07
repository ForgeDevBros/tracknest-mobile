import { View, Text, Pressable, Switch, ScrollView } from 'react-native';
import { useSettingsStyles } from '@/styles/screens/settings.styles';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';

export default function NotificationSettingsScreen() {
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(true);
    const [expenseAlerts, setExpenseAlerts] = useState(true);
    const [budgetReminders, setBudgetReminders] = useState(true);
    const [weeklyReport, setWeeklyReport] = useState(false);
    const [monthlyReport, setMonthlyReport] = useState(true);
    const [securityAlerts, setSecurityAlerts] = useState(true);
    const theme = useColorScheme() ?? 'dark';
    const styles = useSettingsStyles();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.replace('/Account/account')}>
                    <IconSymbol name="chevron.left" size={24} color={Colors[theme].cardItem} />
                </Pressable>
                <Text style={styles.headerTitle}>Notification</Text>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>General Notifications</Text>
                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Push Notifications</Text>
                            <Text style={styles.settingDescription}>Receive push notifications on your device</Text>
                        </View>
                        <Switch
                            value={pushEnabled}
                            onValueChange={setPushEnabled}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Email Notifications</Text>
                            <Text style={styles.settingDescription}>Receive notifications via email</Text>
                        </View>
                        <Switch
                            value={emailEnabled}
                            onValueChange={setEmailEnabled}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Transaction Alerts</Text>
                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Expense Alerts</Text>
                            <Text style={styles.settingDescription}>Get notified about new expenses</Text>
                        </View>
                        <Switch
                            value={expenseAlerts}
                            onValueChange={setExpenseAlerts}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Budget Reminders</Text>
                            <Text style={styles.settingDescription}>Alerts when approaching budget limits</Text>
                        </View>
                        <Switch
                            value={budgetReminders}
                            onValueChange={setBudgetReminders}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reports & Summaries</Text>
                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Weekly Report</Text>
                            <Text style={styles.settingDescription}>Receive weekly spending summaries</Text>
                        </View>
                        <Switch
                            value={weeklyReport}
                            onValueChange={setWeeklyReport}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Monthly Report</Text>
                            <Text style={styles.settingDescription}>Receive monthly financial reports</Text>
                        </View>
                        <Switch
                            value={monthlyReport}
                            onValueChange={setMonthlyReport}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Security</Text>
                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Security Alerts</Text>
                            <Text style={styles.settingDescription}>Get notified about important security events</Text>
                        </View>
                        <Switch
                            value={securityAlerts}
                            onValueChange={setSecurityAlerts}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
