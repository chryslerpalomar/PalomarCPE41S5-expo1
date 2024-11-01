// App.js
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal, Pressable, Alert } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function App() {
  const [goals, setGoals] = useState([]);
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(false);
  const [warningModalVisible, setWarningModalVisible] = useState(false);

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => {
      const updatedGoals = [
        ...currentGoals,
        { text: goalText, key: Math.random().toString() }
      ];
      if (updatedGoals.length > 5) {
        setWarningModalVisible(true); // Show warning modal if goals exceed 5
      }
      return updatedGoals;
    });
  }

  function deleteGoalHandler(goalId) {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.key !== goalId));
  }

  const showWelcomeMessage = () => {
    setWelcomeModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://www.baltana.com/files/wallpapers-17/Beautiful-Stars-HD-Wallpapers-43701.jpg',
        }}
        style={styles.backgroundImage}>
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.iconContainer}>
        <Pressable onPress={showWelcomeMessage}>
          <FontAwesome name="user" size={60} color="#007AFF" />
        </Pressable>
      </View>

      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        
        <View style={styles.goalListContainer}>
          <Text style={styles.goalTitle}>List of Goals - Chrysler Palomar</Text>
          <GoalList goals={goals} onDeleteGoal={deleteGoalHandler}/>
        </View>
      </View>

      {/* Welcome Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={welcomeModalVisible}
        onRequestClose={() => setWelcomeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Welcome! This application will help you track your goals.</Text>
            <Pressable style={styles.confirmButton} onPress={() => setWelcomeModalVisible(false)}>
              <Text style={styles.confirmButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Warning Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={warningModalVisible}
        onRequestClose={() => setWarningModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Notice: You have listed more than five goals, consider taking a break as working too much is not good to your health.</Text>
            <Pressable style={styles.confirmButton} onPress={() => setWarningModalVisible(false)}>
              <Text style={styles.confirmButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 20, 0.5)',
  },
  iconContainer: { 
    marginTop: 50,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appContainer: {
    flex: 1,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  goalListContainer: {
    flex: 1,
    maxHeight: 650,
    marginTop: 0,
    alignItems: 'center',
    width: '100%',
  },
  goalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: '#00bfff',
    borderBottomColor: '#00bfff',
    paddingVertical: 10,
    width: 320,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0, 71, 171, 0.25)',
    borderWidth: 1,
    borderColor: '#00bfff',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: 'rgba(220,220,220,1)',
    marginBottom: 15,
    textAlign: 'justify',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
