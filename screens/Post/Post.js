// import { useState, useEffect } from 'react';
// import { Text, View, Pressable, ScrollView, StyleSheet } from 'react-native';
// import { Button, Card, Avatar, IconButton } from 'react-native-paper';
// import SignOut from '../../components/modal/SignOut';


// export default function Post() {
//     const [postdata, setPostData] = useState('');
//     useEffect(() => {
//         console.log('init');
//         getData();
//         console.log('effect');
//     }, [])
//     // const BaseUrl = 'http://192.168.100.87:3000/api/post/get/1'
//     const BaseUrl = 'http://localhost:8000/data'        //local json server
//     function getData() {
//         fetch(BaseUrl)
//             .then((res) => {
//                 if (!res.ok) {
//                     console.log('Error Encounterd');

//                 } else {
//                     console.log("promise bhanda agi ko log");
//                     // console.log(res);
//                     return res.json();
//                 }
//             }
//             )
//             .then(data => {
//                 console.log('Check incoming');
//                 console.log(data);
//                 setPostData(data);
//             }).catch(
//                 console.log('Error aayo k!!!')
//             )
//     }
//     console.log('test');
//     console.log(postdata);


//     return (
//         <>
//             <ScrollView contentContainerStyle={styles.PostContainer}>
//                 <Card style={styles.Post} >
//                     <View style={styles.postTop}>

//                         <View style={styles.dpName}>
//                             <Avatar.Image size={32} source={require('../../assets/img/mydp.png')} />
//                             <Text style={styles.Name}>Dummy Bahadur </Text>
//                         </View>
//                         <Pressable onPress={() =>
//                             // console.log('her bhai')
//                             <SignOut />
//                         }>
//                             <Avatar.Text size={28} label="!" />
//                         </Pressable>
//                     </View>
//                     <Card.Content>
//                         <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
//                     </Card.Content>

//                     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//                     <Card.Actions >
//                         <View style={styles.Interactive}>
//                             <Button style={styles.Button}>Like</Button>
//                             <Button style={styles.Button}>Comment</Button>
//                             <Button style={styles.Button}>Share</Button>
//                         </View>
//                     </Card.Actions>
//                 </Card>
//                 <Card style={styles.Post} >
//                     <View style={styles.postTop}>

//                         <View style={styles.dpName}>
//                             <Avatar.Image size={32} source={require('../../assets/img/mydp.png')} />
//                             <Text style={styles.Name}>Dummy Bahadur </Text>
//                         </View>
//                         <Pressable onPress={() =>
//                             // console.log('her bhai')
//                             <SignOut />
//                         }>
//                             <Avatar.Text size={28} label="!" />
//                         </Pressable>
//                     </View>
//                     <Card.Content>
//                         <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
//                     </Card.Content>

//                     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//                     <Card.Actions >
//                         <View style={styles.Interactive}>
//                             <Button style={styles.Button}>Like</Button>
//                             <Button style={styles.Button}>Comment</Button>
//                             <Button style={styles.Button}>Share</Button>
//                         </View>
//                     </Card.Actions>
//                 </Card>
//                 <Card style={styles.Post} >
//                     <View style={styles.postTop}>

//                         <View style={styles.dpName}>
//                             <Avatar.Image size={32} source={require('../../assets/img/mydp.png')} />
//                             <Text style={styles.Name}>Dummy Bahadur </Text>
//                         </View>
//                         <Pressable onPress={() =>
//                             // console.log('her bhai')
//                             <SignOut />
//                         }>
//                             <Avatar.Text size={28} label="!" />
//                         </Pressable>
//                     </View>
//                     <Card.Content>
//                         <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
//                     </Card.Content>

//                     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//                     <Card.Actions >
//                         <View style={styles.Interactive}>
//                             <Button style={styles.Button}>Like</Button>
//                             <Button style={styles.Button}>Comment</Button>
//                             <Button style={styles.Button}>Share</Button>
//                         </View>
//                     </Card.Actions>
//                 </Card>
//             </ScrollView>

//         </>
//     )
// }

// const styles = StyleSheet.create({
//     PostContainer: {
//         width: '100%',
//         backgroundColor: 'white',
//         flexDirection: 'column',
//         justifyContent: 'center',
//     },
//     Post: {
//         padding: 10,
//         height: 'auto',
//         width: "100%",
//         backgroundColor: '#d9d9d9',
//         justifyContent: 'center',
//         marginTop: 5,
//         marginBottom: 5,
//     },
//     postTop: {
//         height: 40,
//         // backgroundColor:'red',
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//     },
//     dpName: {
//         width: "40%",
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         borderBottomWidth: 1,
//         borderBottomColor: 'red',
//         borderBottomLeftRadius: 20,
//         borderTopLeftRadius: 20,
//     },
//     caption: {
//         height: 'auto',
//         color: 'black',
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     Name: {
//         color: 'black',
//     },
//     Interactive: {
//         width: '100%',
//         // backgroundColor: 'red',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//     },
//     // Button: {
//     //     backgroundColor: 'grey',
//     //     height: 40,
//     //     width: 110,
//     //     borderRadius: 20,
//     // },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         paddingHorizontal: 10,
//     },
//     button: {
//         alignItems: 'center',
//         backgroundColor: 'red',
//         padding: 10,
//     },
//     countContainer: {
//         alignItems: 'center',
//         padding: 10,
//     },
// })





import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import axios from 'axios';

export default function Post() {
    const [postdata, setPostData] = useState([]);
    const [userName, setUserName] = useState('Dummy');
    const [pageNumber, setPageNumber] = useState(1);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        getData();
        fetchUserName();
    }, []);

    const BaseUrl = `http://localhost:8000/data?page=${pageNumber}&limit=10`;

    function getData() {
        axios.get(BaseUrl)
            .then(response => {
                setPostData(prevData => [...prevData, ...response.data]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function fetchUserName() {
        axios.get('https://api.example.com/user')
            .then(response => {
                const userFirstName = response.data.firstName;
                setUserName(userFirstName);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const paddingToBottom = 20;
        if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
            setPageNumber(prevPageNumber => prevPageNumber + 1);
            getData();
        }
    };

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.PostContainer}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        >
            {postdata.map((post, index) => (
                <Card key={index} style={styles.Post}>
                    <View style={styles.dpName}>
                        <Avatar.Image size={32} source={require('../../assets/img/mydp.png')} />
                        <Text style={styles.Name}>{userName}</Text>
                    </View>

                    <Text>{post.title}</Text>
                    <Text>{post.description}</Text>
                </Card>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    PostContainer: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Post: {
        padding: 10,
        height: 'auto',
        width: '100%',
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    dpName: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    Name: {
        color: 'black',
    },
    Interactive: {
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
});
