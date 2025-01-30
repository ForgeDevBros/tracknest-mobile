import { View, Text, TextInput, Pressable, Image, ScrollView, useColorScheme } from 'react-native';
import { useSettingsStyles } from '@/styles/screens/settings.styles';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function EditProfileScreen() {
    const theme = useColorScheme() ?? 'dark';
    const styles = useSettingsStyles();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.replace('/(tabs)/account')}>
                    <IconSymbol name="chevron.left" size={24} color={Colors[theme].cardItem} />
                </Pressable>
                <Text style={styles.headerTitle}>Edit Profile</Text>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.avatarSection}>
                    <Image
                        style={styles.avatar}
                        source={require('@/assets/images/user.png')}
                    />
                    <Pressable style={styles.changePhotoButton}>
                        <Text style={styles.changePhotoText}>Change Photo</Text>
                    </Pressable>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="John Doe"
                            placeholderTextColor={Colors[theme].icon}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="@johndoe"
                            placeholderTextColor={Colors[theme].icon}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="john.doe@example.com"
                            keyboardType="email-address"
                            placeholderTextColor={Colors[theme].icon}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+1 234 567 890"
                            keyboardType="phone-pad"
                            placeholderTextColor={Colors[theme].icon}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Location</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New York, USA"
                            placeholderTextColor={Colors[theme].icon}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Bio</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tell us about yourself"
                            multiline
                            numberOfLines={4}
                            placeholderTextColor={Colors[theme].icon}
                        />
                    </View>

                    <Pressable style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Save Changes</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}