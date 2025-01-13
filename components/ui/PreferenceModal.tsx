import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

type PreferenceModalProps = {
    visible: boolean;
    title: string;
    options: string[];
    selectedValue: string;
    onSelect: (value: string) => void;
    onClose: () => void;
};

export function PreferenceModal({ visible, title, options, selectedValue, onSelect, onClose }: PreferenceModalProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    {options.map((option) => (
                        <Pressable
                            key={option}
                            style={styles.optionItem}
                            onPress={() => {
                                onSelect(option);
                                onClose();
                            }}
                        >
                            <Text style={[
                                styles.optionText,
                                selectedValue === option && styles.selectedOptionText
                            ]}>{option}</Text>
                        </Pressable>
                    ))}
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: Colors.light.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
    },
    optionItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    optionText: {
        fontSize: 16,
        color: Colors.light.text,
    },
    selectedOptionText: {
        color: Colors.light.tint,
        fontWeight: '600',
    },
    closeButton: {
        marginTop: 20,
        padding: 16,
        backgroundColor: Colors.light.tint,
        borderRadius: 12,
        alignItems: 'center',
    },
    closeButtonText: {
        color: Colors.light.background,
        fontSize: 16,
        fontWeight: '600',
    },
});
