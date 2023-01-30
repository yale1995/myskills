import React from "react"
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkill} key={skill}>
            <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        alignItems: 'center',
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        marginVertical: 10
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
})