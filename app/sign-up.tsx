import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Get Started Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E2E2E',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 24,
    }
})