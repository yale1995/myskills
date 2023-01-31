import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native';
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
    id: string,
    name: string
}

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [greeting, setGreeting] = useState('')

    function handleAddNewSkill() {

        const data = {
            id: String(new Date().getHours()),
            name: newSkill
        }
        setMySkills([...mySkills, data])
    }

    let currentHour

    useEffect(() => {
        currentHour = new Date().getHours()

        if (currentHour >= 18) {
            setGreeting('Boa evening!')
        }

        if (currentHour <= 12) {
            setGreeting('Good morning!')
        }

        else {
            setGreeting('Good afternoon!')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Yale Araújo!</Text>
            <Text style={styles.greetings}>{greeting}</Text>
            <TextInput style={styles.input} placeholderTextColor='#555' placeholder='Type your skill' onChangeText={setNewSkill} />

            <Button handleAddNewSkill={handleAddNewSkill} />
            <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard skill={item.name} />
                )}

            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
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
    greetings: {
        color: '#fff'
    }
})