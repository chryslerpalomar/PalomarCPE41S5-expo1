// GoalItem.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

function GoalItem(props) {
    const [modalVisible, setModalVisible] = useState(false);

    function openDeleteModal() {
        setModalVisible(true);
    }

    function closeDeleteModal() {
        setModalVisible(false);
    }

    function confirmDelete() {
        props.onDeleteGoal(props.id);
        closeDeleteModal();
    }

    return (
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{props.text}</Text>
            <Pressable style={styles.deleteButton} onPress={openDeleteModal}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </Pressable>
            
            {/* Modal Component */}
            <Modal
                animationType="slide" // Controls animation when modal appears
                visible={modalVisible} // Controls modal visibility
                onRequestClose={closeDeleteModal} // Closes modal on Android back button
                onShow={() => console.log('Modal is now visible')} // Triggers when modal shows
                transparent={true} // Makes background transparent
                supportedOrientations={['portrait', 'landscape']} // Supported orientations on iOS
                //statusBarTranslucent={true} // Applies to Android, content appears under status bar
                presentationStyle="overFullScreen" // iOS style, covers screen
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to delete this goal?</Text>
                        
                        {/* Confirm Delete Button */}
                        <Pressable style={styles.confirmButton} onPress={confirmDelete}>
                            <Text style={styles.confirmButtonText}>Yes, Delete</Text>
                        </Pressable>
                        
                        {/* Cancel Button */}
                        <Pressable style={styles.cancelButton} onPress={closeDeleteModal}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
        width: '100%',
    },
    deleteButton: {
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: '#ff4d4d',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    confirmButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#cccccc',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    cancelButtonText: {
        color: '#333',
    },
});

export default GoalItem;
