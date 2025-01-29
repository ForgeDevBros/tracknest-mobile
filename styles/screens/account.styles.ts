import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useAccountStyles = () => {
    const theme = useColorScheme() ?? 'dark';
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[theme].background,
        },
        header: {
            backgroundColor: Colors[theme].tint,
            padding: 20,
            paddingTop: 60,
            alignItems: 'center',
        },
        profileSection: {
            alignItems: 'center',
            paddingBottom: 20,
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 16,
        },
        name: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[theme].background,
            marginBottom: 4,
        },
        email: {
            fontSize: 16,
            color: Colors[theme].background,
            opacity: 0.8,
        },
        content: {
            padding: 20,
        },
        section: {
            marginBottom: 24,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 16,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors[theme].cardItem,
            padding: 16,
            borderRadius: 12,
            marginBottom: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        menuText: {
            flex: 1,
            fontSize: 16,
            color: Colors[theme].text,
            marginLeft: 12,
        },
        logoutButton: {
            backgroundColor: '#FF3B30',
            borderRadius: 12,
            padding: 16,
            alignItems: 'center',
            marginTop: 24,
            marginBottom: 100,
        },
        logoutText: {
            color: Colors[theme].background,
            fontSize: 16,
            fontWeight: '600',
        },
        settingInfo: {
            flex: 1,
            marginLeft: 12,
        },
        settingTitle: {
            fontSize: 16,
            fontWeight: '500',
            color: Colors[theme].text,
        },
        settingDescription: {
            fontSize: 14,
            color: Colors[theme].icon,
            marginTop: 2,
        },
    });
};