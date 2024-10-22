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
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        width: '100%', 
        minWidth: 340,
        textAlign: 'center', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    goalText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    }
});

export default GoalItem;
