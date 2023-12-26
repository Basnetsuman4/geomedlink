import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import Iconll from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconlll from 'react-native-vector-icons/Fontisto';
import Iconl from 'react-native-vector-icons/Ionicons';
// import MainModal from '../../components/modal/MainModal';

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
            const response = await fetch('https://dummyjson.com/users/1');
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
        <>

            <View style={styles.container}>
                <View style={styles.dpBox}>
                    <Avatar.Image
                        size={120}
                        style={styles.dp}
                        source={require('../../assets/img/hobert.webp')}
                    />
                    <Text style={styles.fullName}>{`${formData.firstName} ${formData.lastName}`}</Text>
                </View>

                <View style={styles.detailBox}>
                    <View style={styles.InfoList}>
                        <Text style={{ paddingLeft: 15, paddingTop: 5, fontSize: 18, fontWeight: 500, marginBottom: 5 }}>Personal Info</Text>
                        <View style={styles.individualInfo}>
                            <View style={styles.icon}>
                                <Iconl name="person-circle-outline" size={28} />
                            </View>
                            <View style={styles.key_value}>
                                <Text>FullName</Text>
                                <TextInput
                                    style={styles.field}
                                    value={`${formData.firstName} ${formData.lastName}`}
                                    // value={formData.fullName}
                                    onChangeText={(text) =>
                                        setFormData({ ...formData, fullName: text })
                                    }
                                    editable={editable}
                                />
                            </View>
                        </View>
                        <View style={styles.individualInfo}>
                            <View style={styles.icon}>
                                <Iconll name="mail" size={28} />
                            </View>
                            <View style={styles.key_value}>
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
                        </View>
                        <View style={styles.individualInfo}>
                            <View style={styles.icon}>
                                <Icon name="address-card" size={28} />
                            </View>
                            <View style={styles.key_value}>
                                <Text>Address</Text>
                                <TextInput
                                    style={styles.field}
                                    value={formData.address.address}
                                    onChangeText={(text) =>
                                        setFormData({ ...formData, address: text })
                                    }
                                    editable={editable}
                                />
                            </View>
                        </View>
                        <View style={styles.individualInfo}>
                            <View style={styles.icon}>
                                <Icon name="phone-alt" size={28} />
                            </View>
                            <View style={styles.key_value}>
                                <Text>Contact</Text>
                                <TextInput
                                    style={styles.field}
                                    value={formData.phone}
                                    onChangeText={(text) =>
                                        setFormData({ ...formData, contact: text })
                                    }
                                    editable={editable}
                                />
                            </View>
                        </View>
                        <View style={styles.individualInfo}>
                            <View style={styles.icon}>
                                <Iconlll name="blood-drop" size={28} />
                            </View>
                            <View style={styles.key_value}>
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
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title={editable ? 'Save' : 'Edit Details'}
                            onPress={editable ? handleSave : toggleEdit}
                        />
                    </View>
                </View>


            </View>
        </>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B4D4FF",
        height: '100%'
    },
    dpBox: {
        backgroundColor: "white",
        marginTop: 100,
        height: 120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    dp: {
        position: 'absolute',
        top: '-50%',
    },

    fullName: {
        fontSize: 28,
        fontWeight: 'bold',
        position: "absolute",
        bottom: 10,
    },

    detailBox: {
        backgroundColor: 'white',
        padding: 10,
    },
    InfoList: {
        backgroundColor: "#d9d9d9",
        height: 'auto',
        borderRadius: 10
    },
    individualInfo: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: 'red',
        gap: 10
    },

    icon: {
        width: 36
    },

    field: {
        height: 40,
        minWidth: 200,
        border: "none",
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        width: '50%',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10
    }
})
export default ViewDetails;
