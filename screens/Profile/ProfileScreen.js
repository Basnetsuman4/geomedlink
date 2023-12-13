import styles from '../../components/modal/stylings/ModalStyling';
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Modal, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Text, Avatar } from 'react-native-paper';
import DetailModal from '../../components/modal/DetailModal';
import PasswordModal from '../../components/modal/PasswordModal';
import SignOut from '../../components/modal/SignOut';
import Post from '../Post/Post';
import Iconll from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <View style={styles.Wscreen}>
            {/* Header */}
            <Pressable style={styles.ham} onPress={toggleDrawer}>
                <Iconll name="menuunfold" size={20} style={{ transform: [{ rotate: '180deg' }] }} />
            </Pressable>

            {/* Profile Content */}
            <View style={styles.dpBox}>
                <Avatar.Image
                    size={120}
                    style={styles.dp}
                    source={require('../../assets/img/hobert.webp')}
                />
                <Text style={styles.fullName}>Hobert Romain Alex</Text>
            </View>

            {/* Drawer */}
            <Modal
                visible={drawerVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={closeDrawer}
            >
                <TouchableWithoutFeedback onPress={closeDrawer}>
                    <View style={styless.drawerOverlay}>
                        <View style={styless.drawer}>
                            {/* Content inside the drawer */}
                            <DetailModal />
                            <PasswordModal />
                            <SignOut />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {/* Other profile content */}
            <View style={styles.postContainer}>
                {/* <Text style={{ fontWeight: 'bold', fontSize: 20 }}>My Posts</Text> */}
                <Post />
            </View>
        </View>
    );
};

const styless = StyleSheet.create({

    drawer: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: Dimensions.get('window').width * 0.8, // Occupies 80% of the screen width
        backgroundColor: 'white',

    },

    drawerOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to cover the screen
        zIndex: 1
    },
});

export default ProfileScreen;
