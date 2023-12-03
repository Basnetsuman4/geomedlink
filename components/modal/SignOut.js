import React, { useState } from 'react'
import { View } from 'react-native';
import { Modal, Text, Portal, Button } from 'react-native-paper'
import styles from '../../components/modal/stylings/ModalStyling'



const SignOut = () => {
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
                    <View style={styles.signOutBox}>
                        <View style={styles.signOutTitle}>
                            <Text>Are you sure want to sign out ?

                            </Text>
                        </View>
                        <View style={styles.signOBtnSec}>
                            <View style={styles.signOutBtn}>
                                <Button>Yes</Button>
                            </View>
                            <View style={styles.signOutBtn}>
                                <Button>No</Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Portal>

            <Button style={styles.modalBtn} onPress={showModal}>
                Sign Out
            </Button>
        </>
    )
}
export default SignOut;



