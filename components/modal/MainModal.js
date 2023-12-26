// import { StyleSheet } from "react-native";
// import styles from "./stylings/ModalStyling";
// import Close

// const MainModal = ({ onClose, title, children, show }) => {
//     return (
//         <>
//             <div style={styles.modalBox}>
//             </div>
//             <div style={styles.popUp}>
//                 <div style={styles.popHeading}>
//                     <div style={styles.modalTitle}>{title}</div>
//                     <div style={styles.closeBtn}>
//                         <Close onClick={onClose} />
//                     </div>
//                 </div>
//                 <div style={styles.popBody}>
//                     {children}
//                 </div>

//             </div >
//         </>
//     );
// }


// const style = StyleSheet.create({
//     modalBox: {
//         position: "fixed",
//         top: 0,
//         bottom: 0,
//         right: 0,
//         left: 0,
//         zIndex: 1000,
//         // backgroundcolor: rgba(0, 0, 0, 0.6),
//     },
//     popUp: {
//         position: "absolute",
//         width: "30rem",
//         top: "50%",
//         left: "50%",
//         transform: [{ translateX: -50 }, { translateY: -50 }],
//         borderradius: 10,
//         display: flex,
//         flexdirection: column,
//         overflow: hidden,
//         zIndex: 1010,
//     },
//     popHeading: {
//         height: 45, // 2.8rem equivalent in height
//         backgroundColor: 'whitesmoke',
//         flexDirection: 'row', // Equivalent to display: flex
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 16, // Equivalent to padding: 0px 1rem
//     },




//     .popHeading.modalTitle:{
//     fontweight: 500;
// },
//     .popBody:{
//     height: "auto";
//     backgroundcolor: "white";
//     padding: 10px 15px;
//     text - align: justify;
//     font - size: 16px;
//     max - height: calc(100vh - 5rem);
//     overflow - y: auto;
// }
//     .close - btn:hover{
//     transform: scale(1.2);
//     cursor: pointer;
//     stroke: red;
// }
//     .taskDesc, .taskTitle  {
//     min - width: 20rem;
//     height: 4.5rem;
//     background - color: #454461;
//     border - radius: 10px;
//     padding - left: 10px;
//     margin: 8px;
//     display: flex;
//     flex - direction: column;
//     justify - content: space - around;
// }
//     .stageSelect select{
//     width: 100 %;
//     padding - left: 10px;
//     height: 2rem;
//     margin - top: 8px;
// }
//     .taskDesc input{
//     padding - left: 10px;
// }
//     .taskTitle input{
//     padding - left: 10px;
// }
//     .taskDesc input:focus{
//     color: white;
//     outline: none;
// }
//     .taskTitle input:focus{
//     color: white;
//     outline: none;
// }
//     .addCard.stageSelect select, option{
//     background - color: #454461;
//     color: aliceblue;
//     border - radius: 10px;
// }
//     .Form{
//     display: flex;
//     width: 100 %;
//     height: 100 %;
//     justify - content: space - around;
//     flex - direction: column;
//     align - items: center;
// }
//     :: -webkit - scrollbar{
//     width: 8px;
//     border - radius: 20px;
//     left: 10px;
// }

//     :: -webkit - scrollbar - track{
//     height: 5rem;
//     background - color: white;
// }
//     :: -webkit - scrollbar - thumb{
//     background - color: grey;
//     border - radius: 25px;
// }
/* ::-webkit-scrollbar-button */
// })







// export default MainModal;