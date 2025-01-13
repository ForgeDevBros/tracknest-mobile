import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useExpenseStyles = () => {
    const theme = useColorScheme() ?? 'dark';
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[theme].background,
        },
        header: {
            padding: 20,
            paddingTop: 60,
            backgroundColor: Colors[theme].tint,
        },
        headerText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[theme].cardItem,
            marginBottom: 8,
        },
        balanceText: {
            fontSize: 32,
            fontWeight: '600',
            color: Colors[theme].cardItem,
        },
        content: {
            flex: 1,
            padding: 16,
        },
        card: {
            backgroundColor: Colors[theme].cardItem,
            borderRadius: 12,
            padding: 16,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        cardTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 16,
        },
        transactionItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
        },
        transactionLeft: {
            flex: 1,
        },
        transactionTitle: {
            fontSize: 16,
            fontWeight: '500',
            color: Colors[theme].text,
        },
        transactionDate: {
            fontSize: 14,
            color: Colors[theme].icon,
            marginTop: 4,
        },
        transactionAmount: {
            fontSize: 16,
            fontWeight: '600',
            color: '#E53935',
        },
    });
};