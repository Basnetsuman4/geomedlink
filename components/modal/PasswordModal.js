import React, { useState } from 'react'
import { View } from 'react-native';
import { Modal, TextInput, Portal, Button, Text } from 'react-native-paper'
import styles from '../../components/modal/stylings/ModalStyling'


const PasswordModal = () => {

    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {
        backgroundColor: 'white',
        padding: 20,
        maxHeight: '80%',
        width: '80%',
        minHeight: '30%',
        alignSelf: 'center',
        borderRadius: 20
    };

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View style={styles.changePswrdBox}>
                        <View style={styles.interactiveSection}>
                            <View style={styles.inputSection}>
                                <Text>Old Password</Text>
                                <TextInput
                                    placeholder='Example: qwert@123'
                                    secureTextEntry={true}
                                    mode='outlined'
                                    type='password'
                                />
                            </View>
                            <View style={styles.inputSection}>
                                <Text>New Password</Text>
                                <TextInput
                                    placeholder='New Password'
                                    mode='outlined'
                                    secureTextEntry={true}
                                />
                            </View>
                            <View style={styles.inputSection}>
                                <Text>Confirm New Password</Text>
                                <TextInput
                                    placeholder='Re-enter New Password'
                                    secureTextEntry={true}
                                    mode='outlined'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.pswBtn}>
                        <Button>Confirm Change</Button>
                    </View>
                </Modal>
            </Portal>

            <Button style={styles.modalBtn} onPress={showModal}>
                Change Password
            </Button>
        </>
    )
}

export default PasswordModal

