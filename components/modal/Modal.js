import DetailModal from "./DetailModal";
import PasswordModal from "./PasswordModal";
import SignOut from "./SignOut";
const Modal = () => {
    return (
        <View style={styles.container}>
            <DetailModal />
            <PasswordModal />
            <SignOut />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: +999, // Higher zIndex to ensure it appears above other components
        // Add additional styles if needed
    },
})
export default Modal;