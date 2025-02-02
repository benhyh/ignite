import React from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function EmailLogin() {
    return (
        <>
            <View style={[styles.container]}>
                <TextInput 
                    style={[styles.inputContainer]}
                    placeholder="Email"
                    placeholderTextColor="#757272"
                />
                <TextInput 
                    style={[styles.inputContainer]}
                    placeholder="Password"
                    placeholderTextColor="#757272"
                    secureTextEntry
                />
                <View style={[styles.buttonContainer]}>
                    <Text style={[styles.buttonText]}>
                        Log in
                    </Text>
                </View>
                <Text style={[styles.forgotPassword]}>
                    Forgot password?
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E2E2E',
        gap: 16,
    },
    inputContainer: {
        width: 315,
        height: 60,
        borderColor: '#757272',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'transparent',
        paddingHorizontal: 16,
        fontFamily: 'Poppins',
        color: '#757272',
    },
    buttonContainer: {
        width: 316,
        height: 60,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#2E2E2E',
        fontFamily: 'Poppins-Bold',
    },
    forgotPassword: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
    }
})