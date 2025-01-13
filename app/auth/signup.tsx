import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { useAuthStyles } from '@/styles/screens/auth.styles';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function SignupScreen() {
    const styles = useAuthStyles();

    const handleGoogleSignup = () => {
        // Implement Google Sign-in logic
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Sign up to get started</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your full name"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Create a password"
                        secureTextEntry
                    />
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </Pressable>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.dividerLine} />
                </View>

                <Pressable
                    style={styles.socialButton}
                    onPress={handleGoogleSignup}
                >
                    <Image
                        source={require('@/assets/images/google.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Continue with Google</Text>
                </Pressable>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <Link href="/auth/login" style={styles.link}>
                        Sign In
                    </Link>
                </View>
            </View>
        </View>
    );
}