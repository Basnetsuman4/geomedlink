// import { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import DocumentPicker from 'react-native-document-picker'; // Using DocumentPicker for file selection
// import axios from 'axios'; // For making API requests


// const Uploads = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [postText, setPostText] = useState('');

//     const handleFilePick = async () => {
//         try {
//             const file = await DocumentPicker.pick({
//                 type: [DocumentPicker.types.allFiles], // Allow any file type for selection
//             });

//             setSelectedFile(file);
//         } catch (error) {
//             if (DocumentPicker.isCancel(error)) {
//                 console.log('Document picking cancelled.');
//             } else {
//                 console.error('Error picking file:', error);
//             }
//         }
//     };

//     const handlePost = async () => {
//         if (!postText && !selectedFile) {
//             Alert.alert('Add at least one item (text or image) before posting.');
//             return;
//         }

//         // Prepare data to send to the backend
//         const formData = new FormData();
//         if (postText) {
//             formData.append('text', postText);
//         }
//         if (selectedFile) {
//             formData.append('file', {
//                 uri: selectedFile.uri,
//                 type: selectedFile.type,
//                 name: selectedFile.name,
//             });
//         }

//         // Send data to the backend using API
//         try {
//             const response = await axios.post('YOUR_UPLOAD_ENDPOINT', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     // Additional headers if needed
//                 },
//                 // Other Axios configurations
//             });

//             console.log('Post successful:', response.data);
//             // Handle successful post
//         } catch (error) {
//             console.error('Error posting:', error);
//             // Handle posting error
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {/* First View */}
//             <View style={styles.firstView}>
//                 <Image
//                     source={require('')} // Replace with your avatar image
//                     style={styles.avatar}
//                 />
//                 <View style={styles.postSection}>
//                     <Text style={styles.title}>Create a Post</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Write something..."
//                         value={postText}
//                         onChangeText={text => setPostText(text)}
//                         multiline
//                     />
//                     <TouchableOpacity onPress={handleFilePick}>
//                         <Image
//                             source={require('../../assets/img/lockk.png')} // Replace with your upload image icon
//                             style={styles.uploadImage}
//                         />
//                     </TouchableOpacity>
//                     {selectedFile && (
//                         <View style={styles.preview}>
//                             {selectedFile.type.startsWith('image') ? (
//                                 <Image source={{ uri: selectedFile.uri }} style={styles.imagePreview} />
//                             ) : (
//                                 <Text>{selectedFile.name}</Text>
//                             )}
//                         </View>
//                     )}
//                 </View>
//             </View>

//             {/* Second View */}
//             <View style={styles.secondView}>
//                 <Text style={styles.textSection}>
//                     This is the text section inside the second view where you can insert your text.
//                 </Text>
//             </View>

//             {/* Third View */}
//             <View style={styles.thirdView}>
//                 <TouchableOpacity onPress={handleFilePick}>
//                     <Image
//                         source={require('./path/to/upload-image.png')} // Replace with your upload image icon
//                         style={styles.uploadImage}
//                     />
//                 </TouchableOpacity>
//             </View>

//             {/* Post Button */}
//             <TouchableOpacity onPress={handlePost} style={styles.postButton}>
//                 <Text style={styles.postButtonText}>Post.5</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default Uploads;

























// import DocumentPicker from 'react-native-document-picker';
// import axios from 'axios';
// import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
// import { Avatar } from "react-native-paper";
// import { useState } from "react";
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const Upload = () => {

//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleAddPhoto = async () => {
//         try {
//             const res = await DocumentPicker.pick({
//                 type: [DocumentPicker.types.images],
//             });
//             setSelectedImage(res[0].uri); // Update to access URI from response array
//         } catch (err) {
//             if (DocumentPicker.isCancel(err)) {
//                 console.log('Document picker cancelled.');
//             } else {
//                 console.error('Error while picking a document:', err);
//             }
//         }
//     };


//     return (
//         <View style={styles.container}>
//             <View style={styles.firstView}>
//                 <Avatar.Image
//                     size={32}
//                     source={require('../../assets/img/Harry.png')}
//                 />
//                 <Pressable style={styles.PostBtn} onPress={() => console.log('Post is pressed')}>
//                     <Text style={styles.PostText}>Post</Text>
//                 </Pressable>
//             </View>
//             <View style={styles.secondView}>
//                 <TextInput
//                     style={styles.postContentText}
//                     multiline={true}
//                     placeholder="Input your text here."
//                 />
//             </View>
//             <View style={styles.thirdView}>
//                 <View style={styles.thirdView}>
//                     {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}

//                     <Pressable style={styles.media} onPress={handleAddPhoto}>
//                         <Icon name="image" size={30}> Add Photo</Icon>
//                     </Pressable>
//                 </View>
//             </View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         // backgroundColor: 'red',
//         backgroundColor: '#5FBDFF',
//         height: '100%'
//     },
//     firstView: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         backgroundColor: '#C5FFF8',
//         height: 50,
//         paddingHorizontal: 20,
//         paddingTop: 10,
//         paddingBottom: 10,
//         borderBottomColor: 'black',
//         borderBottomWidth: 0.5
//     },
//     PostBtn: {
//         width: 60,
//     },
//     PostText: {
//         color: 'black',
//         fontSize: 18,
//         textAlign: 'center'
//     },
//     secondView: {
//         minHeight: 190,
//         height: "auto",
//         backgroundColor: "#96EFFF",
//         paddingLeft: 20
//     },
//     postContentText: {
//         fontSize: 20
//     },
//     thirdView: {
//         marginBottom: 20,
//         alignItems: 'center',
//         minHeight: 90,
//         maxHeight: 400,
//         backgroundColor: '#5FBDFF',
//         justifyContent: 'center'
//     },
//     media: {
//         // backgroundColor: 'red',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     selectedImage: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'contain',
//     },
// });


// export default Upload;































import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable, Image, ScrollView, Alert } from "react-native";
import { Avatar } from "react-native-paper";
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const Upload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [postText, setPostText] = useState('')







    const handleAddPhoto = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            const selectedURI = res[0]?.uri; // Access URI from response array
            setSelectedImage(selectedURI);

            // Log the selected image URI to the console
            console.log('Selected Image URI:', selectedURI);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Document picker cancelled.');
            } else {
                console.error('Error while picking a document:', err);
            }
        }
    };

    const handlePost = async () => {
        if (!postText && !selectedImage) {
            Alert.alert('Add at least one item (text or image) before posting.');
            return;
        }
        if (selectedImage && !postText) {
            Alert.alert('Add text with image before posting.');
            return;
        }

        try {
            const apiUrl = 'https://example.com/upload/image';
            const formData = new FormData();

            // Append text and image data to FormData
            formData.append('text', postText); // Assuming your API accepts 'text' field
            formData.append('image', {
                uri: selectedImage,
                type: 'image/jpeg',
                name: 'image.jpg',
            });

            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Uploaded:', response.data);
            setPostText('');
            setSelectedImage(null);

            // Handle success or further operations if needed
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle error
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.firstView}>
                <Avatar.Image
                    size={32}
                    source={require('../../assets/img/Harry.png')}
                />
                <Pressable style={styles.PostBtn} onPress={handlePost}>
                    <Text style={styles.PostText}>Post</Text>
                </Pressable>
            </View>
            <ScrollView>
                <View style={styles.secondView}>
                    <TextInput
                        style={styles.postContentText}
                        multiline={true}
                        placeholder="Input your text here."
                        value={postText}
                        onChangeText={(text) => setPostText(text)}
                    />
                </View>


                <View style={styles.thirdView}>
                    {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
                    <Pressable style={styles.media} onPress={handleAddPhoto}>
                        <Icon name="image" size={30}> Add Photo</Icon>
                    </Pressable>
                </View>





            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5FBDFF',
        height: '100%'
    },
    firstView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#C5FFF8',
        height: 50,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    },
    PostBtn: {
        width: 60,
    },
    PostText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    secondView: {
        minHeight: 190,
        maxHeight: 800,
        paddingBottom: 10,
        backgroundColor: "#96EFFF",
        paddingLeft: 20
    },
    postContentText: {
        fontSize: 20
    },
    thirdView: {
        alignItems: 'center',
        marginBottom: 40,
        minHeight: 90,
        maxHeight: 900,
        backgroundColor: '#5FBDFF',
        justifyContent: 'center'
    },
    media: {
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "red"
    },
    selectedImage: {
        marginTop: 20,
        width: "100%",
        height: '100%',
        objectFit: 'contain'
    },

});

export default Upload;
