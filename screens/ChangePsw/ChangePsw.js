import { View, StyleSheet } from "react-native";
import { Avatar, TextInput, Button, Text } from "react-native-paper";
import styles from "../../components/modal/stylings/ModalStyling";
import { useState } from "react";


const ChangePsw = () => {

    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);



    return (<>
        <View style={styles.Mainbox}>



            <View style={styles.changePswrdBox}>
                <View style={styles.interactiveSection}>
                    <View style={styles.inputSection}>
                        <Text>Old Password</Text>
                        <TextInput
                            placeholder='Example: qwert@123'
                            secureTextEntry={true}
                            mode='outlined'
                            type='password'
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Text>New Password</Text>
                        <TextInput
                            placeholder='New Password'
                            mode='outlined'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Text>Confirm New Password</Text>
                        <TextInput
                            placeholder='Re-enter New Password'
                            secureTextEntry={true}
                            mode='outlined'
                        />
                    </View>
                </View>
            </View>



            {/* <View style={styles.dpBox}>
                <Avatar.Image size={120}
                    style={styles.dp}
                    source={require('../../assets/img/hobert.webp')}
                />
                <Text style={styles.fullName}>Hobert Romain Alex</Text>
            </View>

            <View style={styles.detailBox}>
                <View style={styles.keys}>
                    <Text style={styles.keyTitle}>FullName: </Text>
                    <Text style={styles.keyTitle}>Email: </Text>
                    <Text style={styles.keyTitle}>Address: </Text>
                    <Text style={styles.keyTitle}>Contact: </Text>
                    <Text style={styles.keyTitle}>Blood Group:  </Text>
                </View>
                <View style={styles.values}>
                    <Text style={styles.keyTitle}>Dummy Bahadur Koirala</Text>
                    <Text style={styles.keyTitle}>Dummy123@gmail.com</Text>
                    <Text style={styles.keyTitle}>Balkhu, Kathmandu</Text>
                    <Text style={styles.keyTitle}>1234659875</Text>
                    <Text style={styles.keyTitle}>AB'-ve'</Text>
                </View>
            </View>
            <View style={styles.editButton}>
                <Button title="Edit Details">d</Button>
            </View> */}


            <View style={styles.pswBtn}>
                <Button>Confirm Change</Button>
            </View>
        </View>

    </>);
}

export default ChangePsw;