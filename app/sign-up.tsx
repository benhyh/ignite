import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { router } from 'expo-router';


export default function SignUp() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.mainTextContainer}>
                    <Text style={styles.headerText}>To create your</Text>
                    <View style={styles.highlightContainer}>
                        <Text style={styles.highlightText}>personalized</Text>
                        <Image 
                            source={require('@/assets/images/underline.png')}
                            style={styles.underlineImage}
                        />
                    </View>
                    <Text style={styles.headerText}>program</Text>
                </View>
                {/* Sub-Header */}
                <View style={styles.subheaderContainer}>
                    <Text style={styles.subheaderText}>Help us answer</Text>
                    <Text style={styles.subheaderText}>some questions...</Text>
                </View>
                
                {/* Continue Button */}
                <TouchableOpacity>
                    <Pressable 
                        style={({ pressed }) => [
                            styles.buttonContainer,
                            pressed && styles.buttonPressed
                        ]}
                        onPress={() => router.push('/questionnaire')}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E2E2E',
    },
    mainTextContainer: {
        alignItems: 'center'
    },
    subheaderContainer: {
        marginTop: 24,
        alignItems: 'center'
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold'
    },
    highlightText: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: 'bold',
        opacity: 0.85,
    },
    subheaderText: {
        color: '#B5B5B5',
        fontSize: 24,
        fontWeight: 'bold'
    },
    highlightContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    underlineImage: {
        position: 'absolute',
        width: 300,
        height: 80,
        zIndex: -1,
        top: '50%',
        marginTop: -25, 
    },
    buttonContainer: {
        width: 310,
        height: 70,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 36,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonPressed: {
        backgroundColor: '#C0C0C0',
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E2E2E',
    },
})