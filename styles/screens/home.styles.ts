import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useHomeStyles = () => {
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
            paddingBottom: 40,
        },
        headerTop: {
            marginBottom: 20,
        },
        welcomeText: {
            fontSize: 16,
            color: Colors[theme].background,
            opacity: 0.8,
        },
        nameText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[theme].background,
        },
        balanceCard: {
            backgroundColor: Colors[theme].background,
            borderRadius: 16,
            padding: 20,
            marginBottom: -30,
        },
        balanceLabel: {
            fontSize: 14,
            color: Colors[theme].icon,
        },
        balanceAmount: {
            fontSize: 32,
            fontWeight: 'bold',
            color: Colors[theme].text,
            marginVertical: 8,
        },
        balanceChange: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        changeText: {
            color: '#4CAF50',
            fontWeight: '600',
            marginRight: 8,
        },
        periodText: {
            color: Colors[theme].icon,
        },
        quickActions: {
            padding: 20,
            marginTop: 30,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 16,
        },
        actionGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        actionItem: {
            width: '48%',
            backgroundColor: Colors[theme].cardItem,
            padding: 16,
            borderRadius: 12,
            marginBottom: 16,
            alignItems: 'center',
        },
        actionIcon: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: `${Colors[theme].tint}1A`,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
        },
        actionText: {
            color: Colors[theme].text,
            fontWeight: '500',
        },
        recentActivity: {
            padding: 20,
        },
        activityItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: Colors[theme].cardItem,
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
        },
        activityLeft: {
            flex: 1,
        },
        activityTitle: {
            fontSize: 16,
            fontWeight: '500',
            color: Colors[theme].text,
        },
        activityDate: {
            fontSize: 14,
            color: Colors[theme].icon,
            marginTop: 4,
        },
        activityAmount: {
            fontSize: 16,
            fontWeight: '600',
            color: Colors[theme].tint,
        },
        userInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        userTextContainer: {
            flex: 1,
        },
        userImage: {
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 15,
        },
    });
};
