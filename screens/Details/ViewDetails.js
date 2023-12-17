// import { View, Text, Button, StyleSheet } from "react-native";
// import { Avatar, TextInput } from "react-native-paper";
// // import styles from "../../components/modal/stylings/ModalStyling";
// import { useState } from "react";


// // const ViewDetails = () => {

// //     return (<>
// //         <View style={styles.Mainbox}>
// //             <View style={styles.dpBox}>
// //                 <Avatar.Image size={120}
// //                     style={styles.dp}
// //                     source={require('../../assets/img/hobert.webp')}
// //                 />
// //                 <Text style={styles.fullName}>Hobert Romain Alex</Text>
// //             </View>

// //             <View style={styles.detailBox}>
// //                 <View style={styles.individualInfo}>
// //                     <Text>FullName</Text>
// //                     <TextInput disabled style={styles.field}>Hobert Roman Alex</TextInput>
// //                 </View>
// //                 <View style={styles.individualInfo}>
// //                     <Text>Email</Text>
// //                     <TextInput disabled style={styles.field}>Hobertex234@gmail.com</TextInput>
// //                 </View>
// //                 <View style={styles.individualInfo}>
// //                     <Text>Address</Text>
// //                     <TextInput disabled style={styles.field}>California    </TextInput>
// //                 </View>
// //                 <View style={styles.individualInfo}>
// //                     <Text>Contact</Text>
// //                     <TextInput disabled style={styles.field}>9845123265 </TextInput>
// //                 </View>
// //                 <View style={styles.individualInfo}>
// //                     <Text>Blood Group</Text>
// //                     <TextInput disabled style={styles.field}> O +ve</TextInput>
// //                 </View>
// //             </View>
// //             <View style={styles.editButton}>
// //                 <Button title="Edit Details">d</Button>
// //             </View>
// //         </View>

// //     </>);
// // }
// const ViewDetails = () => {
//     const [editable, setEditable] = useState(false);
//     const [fullName, setFullName] = useState('Hobert Roman Alex'); // Sample initial data, replace with actual data
//     const [email, setEmail] = useState('Hobertex234@gmail.com'); // Sample initial data, replace with actual data
//     const [address, setAddress] = useState('California'); // Sample initial data, replace with actual data
//     const [contact, setContact] = useState('9845123265'); // Sample initial data, replace with actual data
//     const [bloodGroup, setBloodGroup] = useState('O +ve'); // Sample initial data, replace with actual data

//     const toggleEdit = () => {
//         setEditable(!editable);
//     };

//     const handleSave = () => {
//         // Logic to save the edited data goes here
//         // For example, you might want to send the updated data to an API or update a database
//         toggleEdit(); // To switch back to view mode after saving
//     };

//     return (
//         <View style={styles.Mainbox}>
//             <View style={styles.dpBox}>
//                 <Avatar.Image
//                     size={120}
//                     style={styles.dp}
//                     source={require('../../assets/img/hobert.webp')}
//                 />
//                 <Text style={styles.fullName}>Hobert Romain Alex</Text>
//             </View>

//             <View style={styles.detailBox}>
//                 <View style={styles.individualInfo}>
//                     <Text>FullName</Text>
//                     <TextInput
//                         disabled={!editable}
//                         style={styles.field}
//                         value={fullName}
//                         onChangeText={(text) => setFullName(text)}
//                     />
//                 </View>
//                 <View style={styles.individualInfo}>
//                     <Text>Email</Text>
//                     <TextInput
//                         disabled={!editable}
//                         style={styles.field}
//                         value={email}
//                         onChangeText={(text) => setEmail(text)}
//                     />
//                 </View>
//                 <View style={styles.individualInfo}>
//                     <Text>Address</Text>
//                     <TextInput
//                         disabled={!editable}
//                         style={styles.field}
//                         value={address}
//                         onChangeText={(text) => setAddress(text)}
//                     />
//                 </View>
//                 <View style={styles.individualInfo}>
//                     <Text>Contact</Text>
//                     <TextInput
//                         disabled={!editable}
//                         style={styles.field}
//                         value={contact}
//                         onChangeText={(text) => setContact(text)}
//                     />
//                 </View>
//                 <View style={styles.individualInfo}>
//                     <Text>Blood Group</Text>
//                     <TextInput
//                         disabled={!editable}
//                         style={styles.field}
//                         value={bloodGroup}
//                         onChangeText={(text) => setBloodGroup(text)}
//                     />
//                 </View>
//             </View>
//             <View style={styles.editButton}>
//                 <Button
//                     title={editable ? 'Save' : 'Edit Details'}
//                     onPress={editable ? handleSave : toggleEdit}
//                 />
//             </View>
//         </View>
//     );
// };


// const styles = StyleSheet.create({


//     dpBox: {
//         height: '25%',
//         backgroundColor: '#318CE7',
//         borderBottomLeftRadius: 25,
//         borderBottomRightRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column'
//     },

//     individualInfo: {
//         // backgroundColor: 'blue',
//         marginBottom: 10
//     },
//     fullName: {
//         fontSize: 24,
//         color: 'white',
//         paddingTop: 30,
//     },

//     keys: {
//         // backgroundColor: 'pink',
//         fontSize: 18,
//         // alignItems:'center'
//         // justifyContent: 'space-around',
//         alignContent: "flex-start"
//     },
//     values: {
//         // backgroundColor: 'maroon',
//         // justifyContent: 'center',
//         // justifyContent: 'space-around',
//         alignContent: 'flex-start',
//         paddingLeft: 2,
//     },
//     detailBox: {
//         minHeight: 'auto',
//         // height: "70%",
//         flexDirection: 'column',
//         // backgroundColor: 'red',
//         justifyContent: 'space-around',
//         padding: 10,
//     }
//     ,
//     keyTitle: {
//         color: 'white',
//         marginTop: 15,
//         fontSize: 16
//     },

//     Mainbox: {
//         backgroundColor: 'grey',
//         height: "100%",
//     },
//     field: {
//         // backgroundColor: 'red',
//         // color: 'white',
//         fontSize: 18,
//         borderRadius: 20,
//         color: 'blue',
//         height: 45
//     }



// })
// export default ViewDetails;










/*-------------Using API and properly Editable--------------*/


import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';

const ViewDetails = () => {
    const [editable, setEditable] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        contact: '',
        bloodGroup: '',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('API POINT FOR FETCHING DATA');
            if (response.ok) {
                const data = await response.json();
                setFormData(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleEdit = () => {
        setEditable(!editable);
    };

    const handleSave = async () => {
        try {
            const response = await fetch('API POINT FOR EDITING DATa', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data updated successfully');
                toggleEdit();
            } else {
                console.error('Data update failed');
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.dpBox}>
                <Avatar.Image
                    size={120}
                    style={styles.dp}
                    source={require('../../assets/img/hobert.webp')}
                />
                <Text style={styles.fullName}>Hobert Romain Alex</Text>
            </View>

            <View style={styles.detailBox}>
                <View style={styles.individualInfo}>
                    <Text>FullName</Text>
                    <TextInput
                        style={styles.field}
                        value={formData.fullName}
                        onChangeText={(text) =>
                            setFormData({ ...formData, fullName: text })
                        }
                        editable={editable}
                    />
                </View>
                <View style={styles.individualInfo}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.field}
                        value={formData.email}
                        onChangeText={(text) =>
                            setFormData({ ...formData, email: text })
                        }
                        editable={editable}
                    />
                </View>
                <View style={styles.individualInfo}>
                    <Text>Address</Text>
                    <TextInput
                        style={styles.field}
                        value={formData.address}
                        onChangeText={(text) =>
                            setFormData({ ...formData, address: text })
                        }
                        editable={editable}
                    />
                </View>
                <View style={styles.individualInfo}>
                    <Text>Contact</Text>
                    <TextInput
                        style={styles.field}
                        value={formData.contact}
                        onChangeText={(text) =>
                            setFormData({ ...formData, contact: text })
                        }
                        editable={editable}
                    />
                </View>
                <View style={styles.individualInfo}>
                    <Text>Blood Group</Text>
                    <TextInput
                        style={styles.field}
                        value={formData.bloodGroup}
                        onChangeText={(text) =>
                            setFormData({ ...formData, bloodGroup: text })
                        }
                        editable={editable}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title={editable ? 'Save' : 'Edit Details'}
                    onPress={editable ? handleSave : toggleEdit}
                />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    dpBox: {
        height: '35%',
        backgroundColor: '#318CE7',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    individualInfo: {
        marginBottom: 10
    },
    fullName: {
        fontSize: 24,
        color: 'white',
        paddingTop: 30,
    },
    keys: {
        fontSize: 18,
        alignContent: "flex-start"
    },
    values: {
        alignContent: 'flex-start',
        paddingLeft: 2,
    },
    detailBox: {
        minHeight: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10,
    }
    ,
    keyTitle: {
        color: 'white',
        marginTop: 15,
        fontSize: 16
    },

    Mainbox: {
        backgroundColor: 'grey',
        height: "100%",
    },
    field: {
        fontSize: 18,
        borderRadius: 20,
        color: 'blue',
        height: 45
    }
})
export default ViewDetails;
