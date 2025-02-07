import { View, Text, ScrollView, Pressable, Image, useColorScheme, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useAccountStyles } from '@/styles/screens/account.styles';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import { PreferenceModal } from '@/components/ui/PreferenceModal';
import { useSession } from '@/context/AuthContext';

export default function AccountScreen() {
    const theme = useColorScheme() ?? 'dark';
    const styles = useAccountStyles();
    const { signOut } = useSession() ?? {};
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [modalType, setModalType] = useState<'currency' | 'language' | null>(null);
    const { session } = useSession() ?? {};
    const userData = session ? JSON.parse(session).session : null;

    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

    const handleLogout = () => {
        signOut?.();
        router.replace('/auth/login');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image
                        style={styles.avatar}
                        source={userData?.avatar ? { uri: userData.avatar } : require('@/assets/images/user.png')}
                    />
                    <Text style={styles.name}>{userData?.name || 'Guest'}</Text>
                    <Text style={styles.email}>{userData?.email || 'john.doe@example.com'}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Account Settings</Text>
                    <Pressable style={styles.menuItem} onPress={() => router.push('/settings/edit-profile')}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].icon} />
                        <Text style={styles.menuText}>Edit Profile</Text>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>
                    <Pressable style={styles.menuItem} onPress={() => router.push('/settings/notification')}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].icon} />
                        <Text style={styles.menuText}>Notification Settings</Text>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>
                    <Pressable style={styles.menuItem} onPress={() => router.push('/settings/security')}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].icon} />
                        <Text style={styles.menuText}>Security</Text>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Preferences</Text>
                    <Pressable
                        style={styles.menuItem}
                        onPress={() => setModalType('currency')}
                    >
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].icon} />
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Currency</Text>
                            <Text style={styles.settingDescription}>{selectedCurrency}</Text>
                        </View>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>

                    <Pressable
                        style={styles.menuItem}
                        onPress={() => setModalType('language')}
                    >
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].icon} />
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Language</Text>
                            <Text style={styles.settingDescription}>{selectedLanguage}</Text>
                        </View>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>

                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Support</Text>
                    <Pressable style={styles.menuItem}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].icon} />
                        <Text style={styles.menuText} onPress={() => router.push('/settings/help-center')}>Help Center</Text>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>
                    <Pressable style={styles.menuItem} onPress={() => router.push('/settings/contact-us')}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].icon} />
                        <Text style={styles.menuText}>Contact Us</Text>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>
                </View>

                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </Pressable>
            </View>

            <PreferenceModal
                visible={modalType === 'currency'}
                title="Select Currency"
                options={currencies}
                selectedValue={selectedCurrency}
                onSelect={setSelectedCurrency}
                onClose={() => setModalType(null)}
            />

            <PreferenceModal
                visible={modalType === 'language'}
                title="Select Language"
                options={languages}
                selectedValue={selectedLanguage}
                onSelect={setSelectedLanguage}
                onClose={() => setModalType(null)}
            />
        </ScrollView>
    );
}