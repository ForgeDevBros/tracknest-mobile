import { View, Text, TextInput, Pressable, Image, ScrollView } from 'react-native';
import { useSettingsStyles } from '@/styles/screens/settings.styles';

export default function EditProfileScreen() {
    // const pan = useRef(new Animated.ValueXY()).current;
    // const panResponder = createPanResponder(pan);
    const styles = useSettingsStyles();
    return (
        <View style={styles.container}>
            {/* <Animated.View
                style={[styles.container, { transform: [{ translateX: pan.x }] }]}
                {...panResponder.panHandlers}
            > */}
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
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="@johndoe"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="john.doe@example.com"
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+1 234 567 890"
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Location</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New York, USA"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Bio</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tell us about yourself"
                            multiline
                            numberOfLines={4}
                        />
                    </View>

                    <Pressable style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Save Changes</Text>
                    </Pressable>
                </View>
            </ScrollView>
            {/* </Animated.View> */}
        </View>
    );
}