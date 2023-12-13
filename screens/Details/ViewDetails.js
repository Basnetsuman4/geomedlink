import { View, Text, Button, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "../../components/modal/stylings/ModalStyling";


const ViewDetails = () => {

    return (<>
        <View style={styles.Mainbox}>

            <View style={styles.dpBox}>
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
            </View>
        </View>

    </>);
}



export default ViewDetails;









/*---------------Fetching Data Through API----------------------*/



// import React, { useState, useEffect } from "react";
// import { View, Text, Button } from "react-native";
// import { Avatar } from "react-native-paper";
// import styles from "../../components/modal/stylings/ModalStyling";
// import axios from "axios";

// const ViewDetails = () => {
//     const [userData, setUserData] = useState(null);

//     const BASEurl = ""

//     useEffect(() => {
//         axios.get(BASEurl)
//             .then(response => {
//                 setUserData(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

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
//                 <View style={styles.keys}>
//                     <Text style={styles.keyTitle}>FullName: </Text>
//                     <Text style={styles.keyTitle}>Email: </Text>
//                     <Text style={styles.keyTitle}>Address: </Text>
//                     <Text style={styles.keyTitle}>Contact: </Text>
//                     <Text style={styles.keyTitle}>Blood Group:  </Text>
//                 </View>
//                 <View style={styles.values}>
//                     {userData && (
//                         <>
//                             <Text style={styles.keyTitle}>{userData.fullName}</Text>
//                             <Text style={styles.keyTitle}>{userData.email}</Text>
//                             <Text style={styles.keyTitle}>{userData.address}</Text>
//                             <Text style={styles.keyTitle}>{userData.contact}</Text>
//                             <Text style={styles.keyTitle}>{userData.bloodGroup}</Text>
//                         </>
//                     )}
//                 </View>
//             </View>
//             <View style={styles.editButton}>
//                 <Button title="Edit Details"></Button>
//             </View>
//         </View>
//     );
// }

// export default ViewDetails;
