

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useState, useEffect } from "react";
import { TouchableOpacity, Keyboard, TextInput, TouchableWithoutFeedback,StyleSheet, Touchable } from "react-native";

import firebase from "../database/firebaseDB"
const auth = firebase.auth();

export default function LoginScreen({navigation}) {
    const [email,setEmail] = useState("");
    const [password, setPassword] =useState("");

    function login() {
        auth
            .signInWithEmailAndPassword(email,password)
            .then(userCredential) => {
                console.log("Signed in!");
                navigation.navigate("Chat", {email }|;
            }}
            .catch((error) => {
                console.log("Error!");
            }
            };
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Chat App</Text>
                <Text style={styles.fieldTitle}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.fieldTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.loginButton} onPress={null}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 60,
    }
  });
  