import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const Report = ({ visible, hideModal }) => {
    const handleYes = () => {
        // Handle 'Yes' action
        hideModal();
    };

    const handleNo = () => {
        hideModal();
    };



    return (
        <Modal visible={visible} animationType="slide" transparent  >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure to report?</Text>
                    <View style={styles.buttonContainer}>
                        <Button onPress={handleYes} title="Yes" />
                        <Button onPress={handleNo} title="No" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default Report;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        width: '80%',
        minHeight: '20%',
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'space-around'
    },
    modalText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});
