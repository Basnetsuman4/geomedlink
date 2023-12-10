// import { ScrollView, View, StyleSheet, Pressable } from 'react-native'
// import React, { useState } from 'react'
// import { Text, Avatar } from 'react-native-paper'
// import DetailModal from '../../components/modal/DetailModal'
// import PasswordModal from '../../components/modal/PasswordModal'
// import styles from '../../components/modal/stylings/ModalStyling'
// import SignOut from '../../components/modal/SignOut'
// import Post from '../Post/Post'

// const ProfileScreen = () => {

//     return (
//         // View of whole screen
//         <View style={styles.Wscreen}>
//             <Pressable style={styles.ham} onPress={() => {
//                 console.log('Ham pressed!!!');
//             }}>
//                 <Avatar.Icon size={20} icon="folder" />
//             </Pressable>
//             <View style={styles.dpBox}>

//                 <Avatar.Image size={120}
//                     style={styles.dp}
//                     source={require('../../assets/img/mydp.png')}
//                 />
//                 <Text style={styles.fullName}>Dummy Bahadur</Text>

//             </View>
//             {/* <DetailModal />
//             <PasswordModal />
//             <SignOut /> */}
//             <View style={{ padding: 10, fontstyle: 'bold', fontSize: 50 }}>
//                 <Text>My Posts</Text>
//                 <Post />
//             </View>
//         </View >
//     )
// }

// export default ProfileScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, Avatar } from 'react-native';
import axios from 'axios';
import styles from '../../components/modal/stylings/ModalStyling';

const ProfileScreen = () => {
    const [firstName, setFirstName] = useState('Dummy Bahadur');

    useEffect(() => {

        axios.get('https://api.example.com/user')
            .then(response => {

                const userFirstName = response.data.firstName;
                setFirstName(userFirstName);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    return (
        <View style={styles.Wscreen}>
            <Pressable style={styles.ham} onPress={() => {
                console.log('Ham pressed!!!');
            }}>
                <Avatar.Icon size={20} icon="folder" />
            </Pressable>
            <View style={styles.dpBox}>
                <Avatar.Image size={120}
                    style={styles.dp}
                    source={require('../../assets/img/mydp.png')}
                />
                <Text style={styles.fullName}>{firstName} Bahadur</Text>
            </View>

            {/* Modal components  ho yo, routing bata milauna parxa yeslai*/}
            {/* <DetailModal />
            <PasswordModal />
            <SignOut /> */}
            <View style={{ padding: 10, fontWeight: 'bold', fontSize: 50 }}>
                <Text>My Posts</Text>
                <Post />
            </View>
        </View>
    );
};

export default ProfileScreen;
