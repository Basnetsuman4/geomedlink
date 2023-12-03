import { ScrollView, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, Avatar } from 'react-native-paper'
import DetailModal from '../../components/modal/DetailModal'
import PasswordModal from '../../components/modal/PasswordModal'
import styles from '../../components/modal/stylings/ModalStyling'
import SignOut from '../../components/modal/SignOut'
import Post from '../Post/Post'

const ProfileScreen = () => {

    return (
        // View of whole screen
        <View style={styles.Wscreen}>
            <View style={styles.dpBox}>
                <Avatar.Image size={120}
                    style={styles.dp}
                    source={require('../../assets/img/mydp.png')}
                />
                <Text style={styles.fullName}>Dummy Bahadur</Text>
                <Text style={styles.idNum}>ID: 4658672</Text>
            </View>
            <DetailModal />
            <PasswordModal />
            <SignOut />
            <View style={{ padding: 10, fontstyle: 'bold', fontSize: 50 }}>
                <Text>My Posts</Text>
            </View>
            <Post />
        </View >
    )
}

export default ProfileScreen;
