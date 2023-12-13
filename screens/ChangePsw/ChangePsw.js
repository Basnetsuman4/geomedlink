import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { useState } from "react";

const ChangePsw = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleChangePassword = () => {

        const data = {
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        };


        axios.post('BASEurl', data)
            .then(response => {
                console.log("Password changed successfully", response.data);
            })
            .catch(error => {
                console.error("Error changing password", error);
            });
    };
    return (<>
        <View style={styles.Mainbox}>
            <View style={styles.changePswrdBox}>
                <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: 'center', marginBottom: 20, marginTop: 10 }}>Reset Password</Text>
                <View style={styles.imgBox}>
                    <Image
                        source={require('../../assets/icon/lockk.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.interactiveSection}>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={styles.data}
                            placeholder='Current Password'
                            secureTextEntry={true}
                            mode='outlined'
                            type='password'
                            value={currentPassword}
                            onChangeText={text => setCurrentPassword(text)}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={styles.data}
                            placeholder='New Password'
                            mode='outlined'
                            secureTextEntry={true}
                            value={newPassword}
                            onChangeText={text => setNewPassword(text)}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={styles.data}
                            placeholder='Re-enter New Password'
                            secureTextEntry={true}
                            mode='outlined'
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}

                        />
                    </View>
                </View>
            </View>
            <View style={styles.pswBtn}>
                <Button style={styles.btnpsw} labelStyle={{ color: 'white' }} onPress={handleChangePassword}>Confirm Change</Button>
            </View>

        </View >

    </>);
}


const styles = StyleSheet.create({
    Mainbox: {
        height: '100%',
        backgroundColor: '#7FFFD4',
        paddingTop: 10,
        paddingHorizontal: 15
    },
    data: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    interactiveSection: {
        // backgroundColor: 'red',
        marginTop: 20,
        height: '50%',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    inputSection: {
        height: '35%',
        // backgroundColor: 'blue',
        justifyContent: 'space-around'
    },
    image: {
        width: "100%",
        height: 100,
        justifyContent: 'center',
        resizeMode: 'contain', // Adjust the image size and aspect ratio
    },
    btnpsw: {
        width: '60%',
        backgroundColor: '#7B66FF',
        margin: 'auto',
        alignSelf: 'center',
    }, pswBtn: {
        width: "100%",
        justifyContent: "center",
    },
})

export default ChangePsw;