import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useAuthStyles = () => {
    const theme = useColorScheme() ?? 'dark';
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[theme].background,
            padding: 20,
        },
        header: {
            marginTop: 30,
            marginBottom: 30,
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: Colors[theme].text,
            marginBottom: 8,
        },
        subtitle: {
            fontSize: 16,
            color: Colors[theme].icon,
        },
        form: {
            flex: 1,
        },
        inputContainer: {
            marginBottom: 20,
        },
        label: {
            fontSize: 14,
            fontWeight: '500',
            color: Colors[theme].text,
            marginBottom: 8,
        },
        input: {
            backgroundColor: `${theme === 'light' ? '#F5F5F5' : '#333'}`,
            borderRadius: 12,
            padding: 16,
            fontSize: 16,
            color: Colors[theme].text,
        },
        forgotPassword: {
            alignSelf: 'flex-end',
            marginBottom: 24,
        },
        forgotPasswordText: {
            color: Colors[theme].tint,
            fontSize: 14,
            fontWeight: '500',
        },
        button: {
            backgroundColor: Colors[theme].tint,
            borderRadius: 12,
            padding: 16,
            alignItems: 'center',
            marginBottom: 24,
        },
        buttonText: {
            color: Colors[theme].background,
            fontSize: 16,
            fontWeight: '600',
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerText: {
            color: Colors[theme].icon,
            fontSize: 14,
        },
        link: {
            color: Colors[theme].tint,
            fontSize: 14,
            fontWeight: '500',
        },
        divider: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
        },
        dividerLine: {
            flex: 1,
            height: 1,
            backgroundColor: '#E5E5E5',
        },
        dividerText: {
            marginHorizontal: 10,
            color: '#666',
        },
        socialButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            padding: 16,
            borderRadius: 12,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: '#E5E5E5',
        },
        socialIcon: {
            width: 24,
            height: 24,
            marginRight: 12,
        },
        socialButtonText: {
            fontSize: 16,
            color: '#333',
            fontWeight: '500',
        },

    });
};