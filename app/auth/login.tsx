import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { useAuthStyles } from '@/styles/screens/auth.styles';
import { useColorScheme } from '@/hooks/useColorScheme.web';

export default function LoginScreen() {
    const theme = useColorScheme() ?? 'dark';
    const styles = useAuthStyles();

    const handleGoogleLogin = () => {
        // Implement Google login logic
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>
            </View>

            <View style={styles.form}>
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
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                </View>

                <Pressable style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.dividerLine} />
                </View>

                <Pressable
                    style={styles.socialButton}
                    onPress={handleGoogleLogin}
                >
                    <Image
                        source={require('@/assets/images/google.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Continue with Google</Text>
                </Pressable>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account? </Text>
                    <Link href="/auth/signup" style={styles.link}>
                        Sign Up
                    </Link>
                </View>
            </View>
        </View>
    );
}