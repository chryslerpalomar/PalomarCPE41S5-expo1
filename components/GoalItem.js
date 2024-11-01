// GoalItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

function GoalItem(props) { 
    return (
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{props.text}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    goalItems: {
        backgroundColor: 'rgba(0, 71, 171, 0.2)',
        padding: 8,
        borderRadius: 5,
        marginVertical: 5,
        width: '100%', 
        minWidth: 320,
        textAlign: 'center', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    goalText: {
        fontSize: 13.5,
        color: '#fff',
        textAlign: 'center',
    }
});

export default GoalItem;
