// import React, { useState } from 'react'
// import { View } from 'react-native';
// import { Modal, Text, Portal, Button } from 'react-native-paper'
// import styles from '../../components/modal/stylings/ModalStyling'



// const Report = () => {
//     const [visible, setVisible] = useState(false);

//     const showModal = () => setVisible(true);
//     const hideModal = () => setVisible(false);
//     const containerStyle = {
//         backgroundColor: 'white',
//         padding: 20,
//         maxHeight: '50%',
//         width: '80%',
//         minHeight: '30%',
//         alignSelf: 'center',
//         borderRadius: 20
//     };


//     return (
//         <>
//             <Portal>
//                 <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
//                     <View style={styles.signOutBox}>
//                         <View style={styles.signOutTitle}>
//                             <Text>Are you sure to report?
//                             </Text>
//                         </View>
//                         <View style={styles.signOBtnSec}>
//                             <View style={styles.signOutBtn}>
//                                 <Button>Yes</Button>
//                             </View>
//                             <View style={styles.signOutBtn}>
//                                 <Button>No</Button>
//                             </View>
//                         </View>
//                     </View>
//                 </Modal>
//             </Portal>

//             <Button style={styles.modalBtn} onPress={showModal}>
//                 Report
//             </Button>
//         </>
//     )
// }
// export default Report;



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
