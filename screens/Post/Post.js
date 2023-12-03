import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Avatar, IconButton, red100 } from 'react-native-paper';
// import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function Post() {
    const [postdata, setPostData] = useState('');
    useEffect(() => {
        console.log('init');
        getData();
        console.log('effecc');
    }, [])


    // const BaseUrl = 'http://192.168.100.87:3000/api/post/get/1'
    const BaseUrl = 'http://localhost:8000/data'        //local json server



    function getData() {
        
        fetch(BaseUrl)
            .then((res) => {
                if (!res.ok) {
                    console.log('Error Encounterd');

                } else {
                    console.log("promise bhanda agi ko log");
                    // console.log(res);
                    return res.json();
                }
            }
            )
            .then(data => {
                console.log('Check incoming');
                console.log(data);
                
                setPostData(data);
            }).catch(
                console.log('Error aayo k!!!')
            )
    }
    console.log('test');
    console.log(postdata);

    return (
        <>
            <ScrollView contentContainerStyle={styles.PostContainer}>

                <Card style={styles.Post} >
                    <View style={styles.postTop}>

                        {/* {postdata.map(data => {
                            return (
                                <View>
                                    <View style={styles.dpName}>
                                        <Avatar.Image size={34}
                                            src={require('../../assets/img/mydp.png')}
                                        />
                                        <Text style={styles.Name}>{data.Fname}</Text>
                                    </View>
                                    <View>
                                        <IconButton
                                            source="camera"
                                            color={red100}
                                            size={20}
                                        />
                                    </View>
                                    <Card.Content>
                                        <Text variant="titleLarge" style={styles.caption}>{data.postcontent}</Text>
                                    </Card.Content>

                                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                                    <Card.Actions >
                                        <View style={styles.Interactive}>
                                            <Button style={styles.Button}>Like</Button>
                                            <Button style={styles.Button}>Comment</Button>
                                            <Button style={styles.Button}>Share</Button>
                                        </View>
                                    </Card.Actions>





                                </View>
                            )
                        })} */}

                        {/* <View style={styles.dpName}>
                            <Avatar.Image size={34}
                                src={require('../../assets/img/mydp.png')}
                            />
                            <Text style={styles.Name}>Dummy Bahadur </Text>
                        </View>
                        <View>
                            <IconButton
                                source="camera"
                                color={red100}
                                size={20}
                            />
                        </View> */}

                    </View>
                    {/* <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
                    </Card.Content>

                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            <Button style={styles.Button}>Like</Button>
                            <Button style={styles.Button}>Comment</Button>
                            <Button style={styles.Button}>Share</Button>
                        </View>
                    </Card.Actions> */}
                </Card>
                <Card style={styles.Post} >
                    <View style={styles.postTop}>

                        <View style={styles.dpName}>
                            <Avatar.Image size={34}
                                src={require('../../assets/img/mydp.png')}
                            />
                            <Text style={styles.Name}>Dummy Bahadur </Text>
                        </View>
                        <View>
                            <IconButton
                                source="camera"
                                color={red100}
                                size={20}
                            />
                        </View>

                    </View>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
                    </Card.Content>

                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            <Button style={styles.Button}>Like</Button>
                            <Button style={styles.Button}>Comment</Button>
                            <Button style={styles.Button}>Share</Button>
                        </View>
                    </Card.Actions>
                </Card>
                <Card style={styles.Post} >
                    <View style={styles.postTop}>

                        <View style={styles.dpName}>
                            <Avatar.Image size={34}
                                src={require('../../assets/img/mydp.png')}
                            />
                            <Text style={styles.Name}>Dummy Bahadur </Text>
                        </View>
                        <View>
                            <IconButton
                                source="camera"
                                color={red100}
                                size={20}
                            />
                        </View>

                    </View>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
                    </Card.Content>

                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            <Button style={styles.Button}>Like</Button>
                            <Button style={styles.Button}>Comment</Button>
                            <Button style={styles.Button}>Share</Button>
                        </View>
                    </Card.Actions>
                </Card>
                <Card style={styles.Post} >
                    <View style={styles.postTop}>

                        <View style={styles.dpName}>
                            <Avatar.Image size={34}
                                src={require('../../assets/img/mydp.png')}
                            />
                            <Text style={styles.Name}>Dummy Bahadur </Text>
                        </View>
                        <View>
                            <IconButton
                                source="camera"
                                color={red100}
                                size={20}
                            />
                        </View>

                    </View>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
                    </Card.Content>

                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            <Button style={styles.Button}>Like</Button>
                            <Button style={styles.Button}>Comment</Button>
                            <Button style={styles.Button}>Share</Button>
                        </View>
                    </Card.Actions>
                </Card>
                <Card style={styles.Post} >
                    <View style={styles.postTop}>

                        <View style={styles.dpName}>
                            <Avatar.Image size={34}
                                src={require('../../assets/img/mydp.png')}
                            />
                            <Text style={styles.Name}>Dummy Bahadur </Text>
                        </View>
                        <View>
                            <IconButton
                                source="camera"
                                color={red100}
                                size={20}
                            />
                        </View>

                    </View>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
                    </Card.Content>

                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions >
                        <View style={styles.Interactive}>
                            <Button style={styles.Button}>Like</Button>
                            <Button style={styles.Button}>Comment</Button>
                            <Button style={styles.Button}>Share</Button>
                        </View>
                    </Card.Actions>
                </Card>





            </ScrollView>


        </>
    )
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
        width: "100%",
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    postTop: {
        height: 40,
        // backgroundColor:'red',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    dpName: {
        width: "40%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    caption: {
        height: 'auto',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
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
    Button: {
        backgroundColor: 'grey',
        height: 40,
        width: 110,
        borderRadius: 20,
    }
})