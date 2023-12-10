// // import { useState, useEffect } from 'react';
import { Button, Card, Avatar, IconButton } from 'react-native-paper';
import SignOut from '../../components/modal/SignOut';

import { Text, View, ScrollView, Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Iconll from 'react-native-vector-icons/AntDesign'



// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, ScrollView, StyleSheet } from 'react-native';
// import { Card, Avatar } from 'react-native-paper';
// import axios from 'axios';

// export default function Post() {
//     const [postdata, setPostData] = useState([]);
//     const [userName, setUserName] = useState('Dummy');
//     const [pageNumber, setPageNumber] = useState(1);
//     const scrollViewRef = useRef(null);

//     useEffect(() => {
//         getData();
//         fetchUserName();
//     }, []);

//     const BaseUrl = `http://localhost:8000/data?page=${pageNumber}&limit=10`;

//     // function getData() {
//     //     axios.get(BaseUrl)
//     //         .then(response => {
//     //             setPostData(prevData => [...prevData, ...response.data]);
//     //         })
//     //         .catch(error => {
//     //             console.error('Error fetching data:', error);
//     //         });
//     // }

//     // function fetchUserName() {
//     //     axios.get('https://api.example.com/user')
//     //         .then(response => {
//     //             const userFirstName = response.data.firstName;
//     //             setUserName(userFirstName);
//     //         })
//     //         .catch(error => {
//     //             console.error('Error fetching user data:', error);
//     //         });
//     // }

//     const handleScroll = (event) => {
//         const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
//         const paddingToBottom = 20;
//         if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
//             setPageNumber(prevPageNumber => prevPageNumber + 1);
//             getData();
//         }
//     };

//     return (
//         <ScrollView
//             ref={scrollViewRef}
//             contentContainerStyle={styles.PostContainer}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//         >
//             {postdata.map((post, index) => (
//                 <Card key={index} style={styles.Post}>
//                     <View style={styles.dpName}>
//                         <Avatar.Image size={32} source={require('../../assets/img/mydp.png')} />
//                         <Text style={styles.Name}>
//                             \jzlkx
//                             {/* {userName} */}
//                         </Text>
//                     </View>

//                     {/* <Text>{post.title}</Text>
//                     <Text>{post.description}</Text> */}
//                 </Card>
//             ))}
//         </ScrollView>
//     );
// }


const Post = () => {
    return (<>

        <ScrollView contentContainerStyle={styles.PostContainer}>
            <Card style={styles.Post} >
                <View style={styles.postTop}>
                    <View style={styles.dpName}>
                        <Avatar.Image size={40} source={require('../../assets/img/Harry.png')} />
                        <Text style={styles.Name}>Hobart Romain Alex</Text>
                    </View>
                    <Pressable onPress={() =>
                        // console.log('her bhai')
                        <SignOut />
                    }>
                        {/* <Avatar.Text size={28} label="!" /> */}
                        <Icon name="ellipsis-v" size={18} color="grey" style={styles.optionIcon} />


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
            <Card style={styles.Post} >
                <View style={styles.postTop}>
                    <View style={styles.dpName}>
                        <Avatar.Image size={40} source={require('../../assets/img/Harry.png')} />
                        <Text style={styles.Name}>Hobart Romain Alex</Text>
                    </View>
                    <Pressable onPress={() =>
                        // console.log('her bhai')
                        <SignOut />
                    }>
                        {/* <Avatar.Text size={28} label="!" /> */}
                        <Icon name="ellipsis-v" size={18} color="grey" style={styles.optionIcon} />


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
            <Card style={styles.Post} >
                <View style={styles.postTop}>
                    <View style={styles.dpName}>
                        <Avatar.Image size={40} source={require('../../assets/img/Harry.png')} />
                        <Text style={styles.Name}>Hobart Romain Alex</Text>
                    </View>
                    <Pressable onPress={() =>
                        // console.log('her bhai')
                        <SignOut />
                    }>
                        {/* <Avatar.Text size={28} label="!" /> */}
                        <Icon name="ellipsis-v" size={18} color="grey" style={styles.optionIcon} />


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
        </ScrollView>

    </>);
}

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
        // backgroundColor: 'red',
        justifyContent: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    optionIcon: {
        paddingTop: 10,
        // backgroundColor: 'red',
        width: 15
    },
    reactionIcon: {
        color: "grey",
    }

})