import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useExploreStyles = () => {
    const theme = useColorScheme() ?? 'dark';
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[theme].background,
        },
        header: {
            paddingTop: 60,
            paddingHorizontal: 20,
            paddingBottom: 20,
            backgroundColor: Colors[theme].background,
        },
        headerTitle: {
            fontSize: 28,
            fontWeight: 'bold',
            color: Colors[theme].text,
            marginBottom: 16,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: `${theme === 'light' ? '#F5F5F5' : '#333'}`,
            borderRadius: 12,
            paddingHorizontal: 16,
            height: 48,
        },
        searchInput: {
            flex: 1,
            marginLeft: 12,
            fontSize: 16,
            color: Colors[theme].text,
        },
        content: {
            flex: 1,
        },
        categorySection: {
            padding: 20,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 16,
        },
        categoriesScroll: {
            flexDirection: 'row',
        },
        categoryItem: {
            backgroundColor: Colors[theme].tint,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            marginRight: 12,
        },
        categoryText: {
            color: Colors[theme].background,
            fontWeight: '500',
        },
        statsSection: {
            padding: 20,
        },
        statsGrid: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        statCard: {
            width: '48%',
            backgroundColor: Colors[theme].cardItem,
            padding: 16,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        statLabel: {
            fontSize: 14,
            color: Colors[theme].icon,
        },
        statAmount: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[theme].text,
            marginVertical: 8,
        },
        statChange: {
            color: '#4CAF50',
            fontWeight: '500',
        },
        negativeChange: {
            color: '#E53935',
        },
        trendsSection: {
            padding: 20,
        },
        trendItem: {
            marginBottom: 16,
        },
        trendInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
        },
        trendCategory: {
            color: Colors[theme].text,
            fontWeight: '500',
        },
        trendAmount: {
            color: Colors[theme].text,
            fontWeight: '600',
        },
        trendBar: {
            height: 8,
            backgroundColor: `${theme === 'light' ? '#F5F5F5' : '#333'}`,
            borderRadius: 4,
        },
        trendProgress: {
            height: '100%',
            backgroundColor: Colors[theme].tint,
            borderRadius: 4,
        },
    });
};