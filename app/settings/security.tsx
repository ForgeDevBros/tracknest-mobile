import { View, Text, Pressable, Switch, ScrollView, Animated } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useSettingsStyles } from '@/styles/screens/settings.styles';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme.web';

export default function SecurityScreen() {
    const [biometricEnabled, setBiometricEnabled] = useState(true);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [pinEnabled, setPinEnabled] = useState(true);
    const [autoLockEnabled, setAutoLockEnabled] = useState(true);
    const theme = useColorScheme() ?? 'dark';

    const styles = useSettingsStyles();

    // const pan = useRef(new Animated.ValueXY()).current;
    // const panResponder = createPanResponder(pan);
    return (
        <View style={styles.container}>
            {/* <Animated.View
                style={[styles.container, { transform: [{ translateX: pan.x }] }]}
                {...panResponder.panHandlers}
            > */}
            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Authentication</Text>
                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Biometric Login</Text>
                            <Text style={styles.settingDescription}>Use fingerprint or face recognition to login</Text>
                        </View>
                        <Switch
                            value={biometricEnabled}
                            onValueChange={setBiometricEnabled}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
                            <Text style={styles.settingDescription}>Add an extra layer of security to your account</Text>
                        </View>
                        <Switch
                            value={twoFactorEnabled}
                            onValueChange={setTwoFactorEnabled}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>App Lock</Text>
                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>PIN Lock</Text>
                            <Text style={styles.settingDescription}>Secure app access with a PIN code</Text>
                        </View>
                        <Switch
                            value={pinEnabled}
                            onValueChange={setPinEnabled}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Auto Lock</Text>
                            <Text style={styles.settingDescription}>Lock app automatically when inactive</Text>
                        </View>
                        <Switch
                            value={autoLockEnabled}
                            onValueChange={setAutoLockEnabled}
                            trackColor={{ false: '#767577', true: Colors[theme].tint }}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Security Options</Text>
                    <Pressable style={styles.menuItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Change Password</Text>
                            <Text style={styles.settingDescription}>Update your account password</Text>
                        </View>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>

                    <Pressable style={styles.menuItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Trusted Devices</Text>
                            <Text style={styles.settingDescription}>Manage devices that can access your account</Text>
                        </View>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>

                    <Pressable style={styles.menuItem}>
                        <View style={styles.settingInfo}>
                            <Text style={styles.settingTitle}>Login History</Text>
                            <Text style={styles.settingDescription}>View recent account activity</Text>
                        </View>
                        <IconSymbol name="chevron.right" size={24} color={Colors[theme].icon} />
                    </Pressable>
                </View>
            </ScrollView>
            {/* </Animated.View> */}
        </View>
    );
}
