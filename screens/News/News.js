// import { useState, useEffect } from 'react';
// import { Text, View, Pressable, ScrollView, StyleSheet } from 'react-native';
// import { Button, Card, Avatar, IconButton } from 'react-native-paper';


// export default function News() {


//     return (
//         <>
//             <ScrollView contentContainerStyle={styles.PostContainer}>

//                 <Card style={styles.News} >

//                     <Card.Content>
//                         <Text variant="titleLarge" style={styles.heading}>
//                             Sever attact on the core chest dafdsfasdfads fasdfsdaf dsfdsfsd f sda
//                         </Text>
//                     </Card.Content>
//                     <Card.Content>
//                         <Text style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
//                     </Card.Content>
//                     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//                 </Card>
//                 <Card style={styles.News} >

//                     <Card.Content>
//                         <Text variant="titleLarge" style={styles.heading}>
//                             Sever attact on the core chest dafdsfasdfads fasdfsdaf dsfdsfsd f sda
//                         </Text>
//                     </Card.Content>
//                     <Card.Content>
//                         <Text style={styles.caption}>I am having problem on the left side of my chest. I am coughing hard and sometimes I can see some bloods too. I have been taking xyz medicine for last 5 days.</Text>
//                     </Card.Content>
//                     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
//         borderRadius: 10,
//         justifyContent: 'center',
//     },
//     News: {
//         padding: 5,
//         height: 'auto',
//         width: "100%",
//         backgroundColor: '#d9d9d9',
//         justifyContent: 'center',
//         marginTop: 5,
//         marginBottom: 5,
//     },
//     heading: {
//         height: 'auto',
//         color: 'black',
//         fontSize: 28,
//         marginBottom: 10,
//     },
//     caption: {
//         height: 'auto',
//         color: 'black',
//         // marginTop: 10,
//         marginBottom: 10,
//     }
// })

import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

export default function News() {
    const [newsData, setNewsData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetchNewsData();
    }, []);

    const BaseUrl = `https://api.example.com/news?page=${pageNumber}&limit=10`;

    const fetchNewsData = () => {
        axios.get(BaseUrl)
            .then(response => {
                setNewsData(prevData => [...prevData, ...response.data]);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
            });
    };

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const paddingToBottom = 20;
        if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
            setPageNumber(prevPageNumber => prevPageNumber + 1);
            fetchNewsData();
        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.PostContainer}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        >
            {newsData.map((article, index) => (
                <Card key={index} style={styles.News}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.heading}>
                            {article.title}
                        </Text>
                    </Card.Content>
                    <Card.Content>
                        <Text style={styles.caption}>{article.description}</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: article.image }} />
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
        borderRadius: 10,
        justifyContent: 'center',
    },
    News: {
        padding: 5,
        height: 'auto',
        width: '100%',
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    heading: {
        height: 'auto',
        color: 'black',
        fontSize: 28,
        marginBottom: 10,
    },
    caption: {
        height: 'auto',
        color: 'black',
        marginBottom: 10,
    },
});
