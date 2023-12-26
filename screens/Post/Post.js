// // import { useState, useEffect } from 'react';
// import { Button, Card, Avatar, IconButton } from 'react-native-paper';
// import SignOut from '../../components/modal/SignOut';

// import { Text, View, ScrollView, Pressable, StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome5'
// import Iconll from 'react-native-vector-icons/AntDesign'
// import Report from '../../components/modal/Report';




// const Post = () => {
//     return (<>

//         <ScrollView contentContainerStyle={styles.PostContainer}>
//             <Card style={styles.Post} >
//                 <View style={styles.postTop}>
//                     <View style={styles.dpName}>
//                         <Avatar.Image size={40} source={require('../../assets/img/Harry.png')} />
//                         <Text style={styles.Name}>Hobart Romain Alex</Text>
//                     </View>
//                     <Pressable onPress={() =>
//                         <Report />
//                     }>
//                         <Icon name="ellipsis-v" size={18} color="grey" style={styles.optionIcon} />
//                     </Pressable>
//                 </View>
//                 <Card.Content>
//                     <Text variant="titleLarge" style={styles.caption}>
//                         Lately, it feels like I've been in a never-ending tango with this stubborn bug! The constant sniffles, sneezing symphonies, and feeling like a marathon runner with a cough have been my daily companions. Slowly pacing through each day, holding out hope for the day this bug decides to bid adieu! 🤒🌧️ </Text>
//                 </Card.Content>
//                 <View style={styles.ImageBox}>
//                     <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJRDYPQYpItOt9krno_-3JLQ32qQMDfEwUQ&usqp=CAU' }} style={styles.Image} />
//                 </View>
//                 <Card.Actions >
//                     <View style={styles.Interactive}>
//                         {/* <Button style={styles.Button}>Like</Button> */}
//                         {/* <Iconll name="" size={} color: */}
//                         <Iconll name="like2" size={18} style={styles.reactionIcon} />
//                         <Icon name="comment-alt" size={18} style={styles.reactionIcon} />
//                         <Icon name="share-square" size={18} style={styles.reactionIcon} />

//                     </View>
//                 </Card.Actions>
//             </Card>

//         </ScrollView>

//     </>);
// }



/****************************************************************** */



import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import Iconll from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Report from '../../components/modal/Report';

const Post = () => {
    const [reportModalVisible, setReportModalVisible] = useState(false);

    const toggleReportModal = () => {
        setReportModalVisible(!reportModalVisible);
    };



    return (
        <>
            <ScrollView contentContainerStyle={styles.PostContainer}>

                <Card style={styles.Post}>
                    <View style={styles.postTop}>
                        <View style={styles.dpName}>
                            <Avatar.Image size={40} source={require('../../assets/img/hobert.webp')} />
                            <Text style={styles.Name}>Hobart Romain Alex</Text>
                        </View>
                        <Pressable onPress={toggleReportModal} style={styles.optionIcon}>
                            <Icon name="exclamation-triangle" size={18} color="grey" />
                        </Pressable>
                    </View>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>
                            Lately, it feels like I've been in a never-ending tango with this stubborn bug! The constant sniffles, sneezing symphonies, and feeling like a marathon runner with a cough have been my daily companions. Slowly pacing through each day, holding out hope for the day this bug decides to bid adieu! 🤒🌧️ </Text>
                    </Card.Content>
                    <View style={styles.ImageBox}>
                        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJRDYPQYpItOt9krno_-3JLQ32qQMDfEwUQ&usqp=CAU' }} style={styles.Image} />
                    </View>
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            {/* <Button style={styles.Button}>Like</Button> */}
                            {/* <Iconll name="" size={} color: */}
                            <Iconll name="like2" size={18} style={styles.reactionIcon} />
                            <Icon name="comment-alt" size={18} style={styles.reactionIcon} />
                            <Icon name="share-square" size={18} style={styles.reactionIcon} />

                        </View>
                    </Card.Actions>
                </Card>
                <Card style={styles.Post}>
                    <View style={styles.postTop}>
                        <View style={styles.dpName}>
                            <Avatar.Image size={40} source={require('../../assets/img/hobert.webp')} />
                            <Text style={styles.Name}>Hobart Romain Alex</Text>
                        </View>
                        <Pressable onPress={toggleReportModal} style={styles.optionIcon}>
                            <Icon name="exclamation-triangle" size={18} color="grey" />
                        </Pressable>
                    </View>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>
                            Lately, it feels like I've been in a never-ending tango with this stubborn bug! The constant sniffles, sneezing symphonies, and feeling like a marathon runner with a cough have been my daily companions. Slowly pacing through each day, holding out hope for the day this bug decides to bid adieu! 🤒🌧️ </Text>
                    </Card.Content>
                    <View style={styles.ImageBox}>
                        <Card.Cover source={{ uri: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/12206/0765ea29-21c6-49b9-8e11-f19b84b8069a.jpg' }} style={styles.Image} />
                    </View>
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            {/* <Button style={styles.Button}>Like</Button> */}
                            {/* <Iconll name="" size={} color: */}
                            <Iconll name="like2" size={18} style={styles.reactionIcon} />
                            <Icon name="comment-alt" size={18} style={styles.reactionIcon} />
                            <Icon name="share-square" size={18} style={styles.reactionIcon} />

                        </View>
                    </Card.Actions>
                </Card>
                <Card style={styles.Post}>
                    <View style={styles.postTop}>
                        <View style={styles.dpName}>
                            <Avatar.Image size={40} source={require('../../assets/img/hobert.webp')} />
                            <Text style={styles.Name}>Hobart Romain Alex</Text>
                        </View>
                        <Pressable onPress={toggleReportModal} style={styles.optionIcon}>
                            <Icon name="exclamation-triangle" size={18} color="grey" />
                        </Pressable>
                    </View>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>
                            Lately, it feels like I've been in a never-ending tango with this stubborn bug! The constant sniffles, sneezing symphonies, and feeling like a marathon runner with a cough have been my daily companions. Slowly pacing through each day, holding out hope for the day this bug decides to bid adieu! 🤒🌧️ </Text>
                    </Card.Content>
                    <View style={styles.ImageBox}>
                        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJRDYPQYpItOt9krno_-3JLQ32qQMDfEwUQ&usqp=CAU' }} style={styles.Image} />
                    </View>
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            {/* <Button style={styles.Button}>Like</Button> */}
                            {/* <Iconll name="" size={} color: */}
                            <Iconll name="like2" size={18} style={styles.reactionIcon} />
                            <Icon name="comment-alt" size={18} style={styles.reactionIcon} />
                            <Icon name="share-square" size={18} style={styles.reactionIcon} />

                        </View>
                    </Card.Actions>
                </Card>
                <Modal visible={reportModalVisible} transparent >
                    <Report visible={reportModalVisible} hideModal={toggleReportModal} />
                </Modal>
            </ScrollView>
        </>
    );
};
export default Post;
const styles = StyleSheet.create({
    PostContainer: {
        width: '100%',
        backgroundColor: '#B2BEB5',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Post: {
        // padding: 10,
        paddingBottom: 5,
        paddingTop: 5,
        height: 'auto',
        width: "100%",
        // backgroundColor: '#d9d9d9',
        // backgroundColor: 'red',
        borderRadius: 0,
        borderBottomWidth: 1,
        // borderBottomColor: 'grey',
        backgroundColor: '#F8F6F4',
        justifyContent: 'center',
        // marginTop: 5,
        // marginBottom: 5,
    },
    postTop: {
        height: 40,
        marginBottom: 10,
        // backgroundColor: 'red',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    dpName: {
        width: "auto",
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // borderBottomColor: 'red',
        // borderBottomLeftRadius: 20,
        // borderTopLeftRadius: 20,
    },
    caption: {
        // width: 100,
        // backgroundColor: 'red',
        textAlign: 'justify',
        height: 'auto',
        color: 'black',
        // marginTop: 3,
        marginBottom: 8,
    },
    Name: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 16,
        paddingLeft: 10,
        // backgroundColor: 'red',
        height: 30,
        width: 'auto'
    },
    Interactive: {
        width: '100%',
        paddingRight: 30,
        paddingLeft: 30,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    ImageBox: {
        width: "100%",
        justifyContent: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    optionIcon: {
        paddingTop: 10,
        // backgroundColor: 'red',
        width: 40,
        alignItems: 'center'
    },
    reactionIcon: {
        color: "grey",
    }

})