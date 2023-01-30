import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill])
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Yale Araújo!</Text>
            <TextInput style={styles.input} placeholderTextColor='#555' placeholder='Type your skill' onChangeText={setNewSkill} />
            <TouchableOpacity style={styles.button} onPress={handleAddNewSkill}>
                <Text style={styles.buttonText}>
                    Add skill
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
            {mySkills.map(skill => (
                <TouchableOpacity style={styles.buttonSkill} key={skill}>
                    <Text style={styles.textSkill}>{skill}</Text>
                </TouchableOpacity>
            ))}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonSkill: {
        alignItems: 'center',
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
})