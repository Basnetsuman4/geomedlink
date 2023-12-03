import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Wscreen: {
        height: "100%",
        width: '100%',
        backgroundColor: 'white'
    },
    dpBox: {
        height: '35%',
        // width: "50%",
        backgroundColor: 'blue',
        backgroundColor: '#318CE7',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    fullName: {
        fontSize: 24,
        color: 'white',
        paddingTop: 30,
    },
    idNum: {
        fontSize: 18,
        marginTop: 20,
        color: 'white'
    },
    keys: {
        // backgroundColor: 'pink',
        fontSize: 18,
        // alignItems:'center'
        justifyContent: 'space-around',
        alignContent: "flex-start"
    },
    values: {
        // backgroundColor: 'maroon',
        // justifyContent: 'center',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        paddingLeft: 2
    },
    detailBox: {
        height: '70%',
        flexDirection: 'row',
        // backgroundColor: 'red'
    }
    ,
    editButton: {
        // backgroundColor:'orange',
        marginTop: 30
    },
    modalBtn: {
        margin: 10,
        // borderColor: 'red',
        borderWidth: 0.5
    },
    signOutBox: {
        flexDirection: 'column',
        width: '100%',
        height: 190,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red'
    },

    signOBtnSec: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-around'
    },
    signOutBtn: {
        backgroundColor: 'yellow',
        borderRadius: 25,
    },
    interactiveSection: {
        // backgroundColor:'red',
        height: '75%',
        flexDirection: 'column',
        // justifyContent:'space-around'
    },
    inputSection: {
        height: '35%',
        // backgroundColor:'blue',
        justifyContent: 'space-around'
    },
    pswBtn: {
        backgroundColor: 'red',
        borderRadius: 15,
    }


}
)

export default styles;