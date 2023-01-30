import React from "react"
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Button({ handleAddNewSkill }) {

    return (
        <TouchableOpacity style={styles.button} onPress={handleAddNewSkill}>
            <Text style={styles.buttonText}>
                Add skill
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})