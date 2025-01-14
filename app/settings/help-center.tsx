import { View, Text, ScrollView, Pressable, Animated } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useSettingsStyles } from '@/styles/screens/settings.styles';
import { Colors } from '@/constants/Colors';
import { useRef, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { router } from 'expo-router';

export default function HelpCenterScreen() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const theme = useColorScheme() ?? 'dark';
    const styles = useSettingsStyles();
    const faqSections = [
        {
            id: 'getting-started',
            title: 'Getting Started',
            items: [
                { question: 'How do I create an account?', answer: 'To create an account, click on the Sign Up button and follow the registration process.' },
                { question: 'How do I reset my password?', answer: 'You can reset your password by clicking on "Forgot Password" on the login screen.' },
            ]
        },
        {
            id: 'tracking',
            title: 'Expense Tracking',
            items: [
                { question: 'How do I add an expense?', answer: 'Click the + button on the home screen and fill in the expense details.' },
                { question: 'Can I edit or delete expenses?', answer: 'Yes, you can edit or delete expenses by long-pressing on any expense item.' },
            ]
        },
        {
            id: 'reports',
            title: 'Reports & Analytics',
            items: [
                { question: 'How do I view my spending reports?', answer: 'Navigate to the Reports tab to view detailed spending analytics.' },
                { question: 'Can I export my expense data?', answer: 'Yes, you can export your data in CSV format from the Reports section.' },
            ]
        },
        {
            id: 'account',
            title: 'Account Management',
            items: [
                { question: 'How do I update my profile?', answer: 'Go to Account > Edit Profile to update your personal information.' },
                { question: 'How can I change my notification settings?', answer: 'Navigate to Account > Notification Settings to manage your preferences.' },
            ]
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.replace('/(tabs)/account')}>
                    <IconSymbol name="chevron.left" size={24} color={Colors[theme].cardItem} />
                </Pressable>
                <Text style={styles.headerTitle}>Help Center</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.searchSection}>
                    <Text style={styles.searchTitle}>How can we help you?</Text>
                    <Text style={styles.searchDescription}>Browse through our frequently asked questions or contact our support team.</Text>
                </View>

                {faqSections.map((section) => (
                    <View key={section.id} style={styles.faqSection}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        {section.items.map((item, index) => (
                            <Pressable
                                key={index}
                                style={styles.faqItem}
                                onPress={() => setExpandedSection(
                                    expandedSection === `${section.id}-${index}`
                                        ? null
                                        : `${section.id}-${index}`
                                )}
                            >
                                <View style={styles.faqHeader}>
                                    <Text style={styles.faqQuestion}>{item.question}</Text>
                                    <IconSymbol
                                        name="chevron.right"
                                        size={24}
                                        color={Colors[theme].icon}
                                    />
                                </View>
                                {expandedSection === `${section.id}-${index}` && (
                                    <Text style={styles.faqAnswer}>{item.answer}</Text>
                                )}
                            </Pressable>
                        ))}
                    </View>
                ))}

                <View style={styles.contactSection}>
                    <Text style={styles.contactTitle}>Still need help?</Text>
                    <Pressable style={styles.contactButton}>
                        <Text style={styles.contactButtonText}>Contact Support</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}
