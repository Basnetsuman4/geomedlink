import React, { useState } from 'react'
import { View } from 'react-native';
import { Modal, Text, Portal, Button } from 'react-native-paper'
import styles from '../../components/modal/stylings/ModalStyling'



const DetailModal = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {
        backgroundColor: 'white',
        padding: 20,
        maxHeight: '50%',
        width: '80%',
        minHeight: '30%',
        alignSelf: 'center',
        borderRadius: 20
    };


    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View style={styles.detailBox}>
                        <View style={styles.keys}>
                            <Text>FullName: </Text>
                            <Text>Email: </Text>
                            <Text>Address: </Text>
                            <Text>Contact: </Text>
                            <Text>Blood Group:  </Text>
                        </View>
                        <View style={styles.values}>
                            <Text>Dummy Bahadur Koirala</Text>
                            <Text>Dummy123@gmail.com</Text>
                            <Text>Balkhu, Kathmandu</Text>
                            <Text>1234659875</Text>
                            <Text>AB'-ve'</Text>
                        </View>
                    </View>
                    <View style={styles.editButton}>
                        <Button>Edit Details</Button>
                    </View>
                </Modal>
            </Portal>

            <Button style={styles.modalBtn} onPress={showModal}>
                Show Details
            </Button>
        </>
    )
}
export default DetailModal;



