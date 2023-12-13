import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Modal } from 'react-native';
import { Card, Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconll from 'react-native-vector-icons/AntDesign';
import Iconlll from 'react-native-vector-icons/Octicons';
import axios from 'axios';
import Report from '../../components/modal/Report';

const Comment = () => {


    //State to handle the repost post
    const [reportModalVisible, setReportModalVisible] = useState(false);
    const toggleReportModal = () => {
        setReportModalVisible(!reportModalVisible);
    };



    // State to hold the comment
    const [comment, setComment] = useState('');

    // Function to handle posting the comment
    const postComment = async () => {
        try {
            // Make a POST request using Axios
            const response = await axios.post(' BACKEND_API_ENDPOINT', {
                comment: comment, // Pass the comment data here
            });

            // Log the response or handle it accordingly
            console.log('Comment posted:', response.data);

            // Clear the input field after posting
            setComment('');
        } catch (error) {
            // Handle error scenarios
            console.error('Error posting comment:', error);
        }
    };


    // Function to fetch comments from the API
    const fetchComments = async () => {
        try {
            // Replace 'COMMENT_API_ENDPOINT' with your actual API endpoint
            const response = await axios.get('COMMENT_API_ENDPOINT');
            // Assuming the response data is an array of comments
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        // Fetch comments when the component mounts
        fetchComments();
    }, []);




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
                            <Iconlll name="report" size={18} color="grey" />
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
                            <Iconll name="like2" size={18} style={styles.reactionIcon} >
                                <Text style={{ fontSize: 14 }}> Like</Text>
                            </Iconll>
                            <Icon name="comment-alt" size={18} style={styles.reactionIcon} >
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: "black", }}> Comment</Text>
                            </Icon>
                            <Icon name="share-square" size={18} style={styles.reactionIcon} >
                                <Text style={{ fontSize: 14 }}> Share</Text>
                            </Icon>

                        </View>
                    </Card.Actions>
                </Card>


                <View style={styles.CommentBox}>
                    <View style={styles.cmnt}>
                        <Avatar.Image size={30} source={require('../../assets/img/hobert.webp')} />
                        <TextInput
                            style={styles.ipComment}
                            placeholder='Leave you comment here'
                            multiline={true}

                        /*-------------------Uncomment this us use API----------------- */
                        // value={comment}
                        // onChangeText={text => setComment(text)} // Update the comment state

                        />
                    </View>
                    <View style={styles.CommentAction}>
                        <Iconll name="camerao" size={18} style={styles.reactionIcon} />
                        <Pressable onPress={postComment} style={styles.PostCmnt}>
                            <Text style={{ fontWeight: 'bold' }}>Post</Text>
                        </Pressable>
                    </View>
                </View>



                {/*-----Static comment that is already made */}
                <View style={styles.CommentBox}>
                    <View style={styles.cmnt}>
                        <Avatar.Image size={30} source={require('../../assets/img/hobert.webp')} />
                        <Text style={styles.ipComment}>
                            This is the comment related to this post
                        </Text>
                    </View>
                    <View style={styles.CommentAction}>
                        <Pressable onPress={() => console.log('Post  !!!!!')} style={styles.PostCmnt}>
                            <Text style={{ fontWeight: 'bold' }}>Report Comment</Text>
                        </Pressable>
                    </View>
                </View>







                {/*------Fetch the comment that has already been made from API  (Uncomment the code below) */}

                {/* {comments.map((commentData, index) => (
                    <View key={index} style={styles.CommentBox}>
                        <View style={styles.cmnt}>
                            <Avatar.Image size={30} source={require('../../assets/img/hobert.webp')} />
                            <Text style={styles.ipComment}>{commentData.text}</Text>
                        </View>
                        <View style={styles.CommentAction}>
                            <Pressable onPress={() => console.log('Post  !!!!!')} style={styles.PostCmnt}>
                                <Text style={{ fontWeight: 'bold' }}>Report Comment</Text>
                            </Pressable>
                        </View>
                    </View>
                ))} */}






                <Modal visible={reportModalVisible} transparent >
                    <Report visible={reportModalVisible} hideModal={toggleReportModal} />
                </Modal>
            </ScrollView >
        </>
    );


}


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
    ,
    CommentBox: {
        minHeight: 100,
        backgroundColor: "white",
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10

    },
    cmnt: {
        // backgroundColor: "aqua",
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"
    },
    ipComment: {
        backgroundColor: 'transparent',
        width: "85%",
        fontSize: 14
    },
    CommentAction: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        paddingTop: 5,


        // backgroundColor: 'red'
    },
    PostCmnt: {
        // backgroundColor: "aqua",
        width: 'auto',

    }
})



export default Comment;