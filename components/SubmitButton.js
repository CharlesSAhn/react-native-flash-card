import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function SubmitButton ( { onPress, name  } ) {
    return (
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btnText}> { name } </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#E53224',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10
    },
    btnText: {
        color: '#fff'
    }
})