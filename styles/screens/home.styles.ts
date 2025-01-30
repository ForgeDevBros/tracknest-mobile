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
            backgroundColor: Colors[theme].background,
            padding: 20,
            paddingTop: 60,
            paddingBottom: 40,
        },
        headerTop: {
            marginBottom: 20,
        },
        welcomeText: {
            fontSize: 16,
            color: Colors[theme].text,
            opacity: 0.8,
            fontFamily: 'Alice',
        },
        nameText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[theme].text,
            fontFamily: 'Alice',
        },
        balanceCard: {
            backgroundColor: Colors[theme].cardItem,
            borderRadius: 16,
            padding: 20,
            marginBottom: -30,
        },
        balanceLabel: {
            fontSize: 14,
            color: Colors[theme].icon,
            fontFamily: 'Alice',
        },
        balanceAmount: {
            fontSize: 32,
            fontWeight: 'bold',
            color: Colors[theme].text,
            marginVertical: 8,
            fontFamily: 'Alice',
        },
        actionAmmount: {
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors[theme].text,
            marginVertical: 8,
            fontFamily: 'Alice',
        },
        balanceChange: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        changeText: {
            color: '#4CAF50',
            fontWeight: '600',
            marginRight: 8,
            fontFamily: 'Alice',
        },
        periodText: {
            color: Colors[theme].icon,
            fontFamily: 'Alice',
        },
        quickActions: {
            padding: 20,
            marginTop: 30,
            fontFamily: 'Alice',
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 16,
            fontFamily: 'Alice',
        },
        actionGrid: {
            flexDirection: 'row',
            paddingHorizontal: 4,
        },
        actionItem: {
            width: 130,
            backgroundColor: Colors[theme].cardItem,
            padding: 16,
            borderRadius: 12,
            marginRight: 12,
            alignItems: 'center',
            fontFamily: 'Alice',
        },
        actionIcon: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: `${Colors[theme].tint}1A`,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
            fontFamily: 'Alice',
        },
        actionText: {
            color: Colors[theme].text,
            fontWeight: '500',
            fontFamily: 'Alice',
        },
        recentActivity: {
            padding: 20,
            paddingBottom: 100,
            fontFamily: 'Alice',
        },
        activityItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: Colors[theme].cardItem,
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            fontFamily: 'Alice',
        },
        activityLeft: {
            flex: 1,
        },
        activityTitle: {
            fontSize: 16,
            fontWeight: '500',
            color: Colors[theme].text,
            fontFamily: 'Alice',
        },
        activityDate: {
            fontSize: 14,
            color: Colors[theme].icon,
            marginTop: 4,
        },
        activityAmount: {
            fontSize: 16,
            fontWeight: '600',
            color: Colors[theme].text,
            fontFamily: 'Alice',
        },
        userInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'Alice',
        },
        userTextContainer: {
            flex: 1,
            fontFamily: 'Alice',
        },
        userImage: {
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 15,
        },
        dotsContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 12,
        },
        dot: {
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: Colors[theme].icon,
            marginHorizontal: 4,
            opacity: 0.5,
        },
        balanceInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'Alice',
        },
        pieContainer: {
            width: 100,
            height: 100,
        },
        chartLabel: {
            textAlign: 'center',
            marginTop: 8,
            color: Colors[theme].text,
            fontSize: 14,
            fontFamily: 'Alice',
        },
        budgetBadge: {
            backgroundColor: '#fca55720',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
            alignSelf: 'flex-start',
            marginTop: 8,
        },
        budgetText: {
            color: '#fca557',
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'Alice',
        },
        fab: {
            position: 'absolute',
            backgroundColor: Colors[theme].tint,
            bottom: 100,
            right: 20,
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
        },
        headerContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
        },
        headerTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[theme].background,
            fontFamily: 'Alice',
        },


    });
};
