import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useSettingsStyles } from '@/styles/screens/settings.styles';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme.web';

export default function ContactUsScreen() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    // const pan = useRef(new Animated.ValueXY()).current;
    // const panResponder = createPanResponder(pan);
    const theme = useColorScheme() ?? 'dark';
    const styles = useSettingsStyles();
    const handleSubmit = () => {
        // Handle form submission
        console.log({ subject, message });
        router.back();
    };

    return (
        <View style={styles.container}>
            {/* <Animated.View
                style={[styles.container, { transform: [{ translateX: pan.x }] }]}
                {...panResponder.panHandlers}
            > */}
            <ScrollView style={styles.content}>
                <View style={styles.contactHeader}>
                    <Text style={styles.contactsTitle}>Get in Touch</Text>
                    <Text style={styles.contactDescription}>
                        We're here to help! Send us a message and we'll respond as soon as possible.
                    </Text>
                </View>

                <View style={styles.contactInfo}>
                    <View style={styles.contactMethod}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].tint} />
                        <View style={styles.contactMethodText}>
                            <Text style={styles.contactMethodTitle}>Email</Text>
                            <Text style={styles.contactMethodValue}>support@tracknest.com</Text>
                        </View>
                    </View>

                    <View style={styles.contactMethod}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].tint} />
                        <View style={styles.contactMethodText}>
                            <Text style={styles.contactMethodTitle}>Phone</Text>
                            <Text style={styles.contactMethodValue}>+1 (555) 123-4567</Text>
                        </View>
                    </View>

                    <View style={styles.contactMethod}>
                        <IconSymbol name="house.fill" size={24} color={Colors[theme].tint} />
                        <View style={styles.contactMethodText}>
                            <Text style={styles.contactMethodTitle}>Hours</Text>
                            <Text style={styles.contactMethodValue}>Mon-Fri, 9:00 AM - 6:00 PM</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="What can we help you with?"
                            value={subject}
                            onChangeText={setSubject}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Message</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Type your message here..."
                            multiline
                            numberOfLines={6}
                            value={message}
                            onChangeText={setMessage}
                        />
                    </View>

                    <Pressable
                        style={[styles.saveButton, !subject || !message ? styles.buttonDisabled : null]}
                        onPress={handleSubmit}
                        disabled={!subject || !message}
                    >
                        <Text style={styles.saveButtonText}>Send Message</Text>
                    </Pressable>
                </View>
            </ScrollView>
            {/* </Animated.View> */}
        </View >
    );
}
