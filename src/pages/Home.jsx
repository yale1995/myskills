import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native';
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill() {
        setMySkills([...mySkills, newSkill])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Yale Araújo!</Text>
            <TextInput style={styles.input} placeholderTextColor='#555' placeholder='Type your skill' onChangeText={setNewSkill} />

            <Button handleAddNewSkill={handleAddNewSkill}/>
            <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
            {mySkills.map(skill => (
                <SkillCard key={skill} skill={skill}/>
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
})