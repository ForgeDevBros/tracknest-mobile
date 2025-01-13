import { View, Text } from 'react-native';
import { useExpenseStyles } from '@/styles/screens/expenses.styles';
export default function ExpensesScreen() {
    const styles = useExpenseStyles();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Expenses</Text>
                <Text style={styles.balanceText}>$2,450.00</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Recent Transactions</Text>
                    <View style={styles.transactionItem}>
                        <View style={styles.transactionLeft}>
                            <Text style={styles.transactionTitle}>Grocery Shopping</Text>
                            <Text style={styles.transactionDate}>Today, 2:30 PM</Text>
                        </View>
                        <Text style={styles.transactionAmount}>-$85.00</Text>
                    </View>
                    <View style={styles.transactionItem}>
                        <View style={styles.transactionLeft}>
                            <Text style={styles.transactionTitle}>Coffee Shop</Text>
                            <Text style={styles.transactionDate}>Today, 9:15 AM</Text>
                        </View>
                        <Text style={styles.transactionAmount}>-$4.50</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
