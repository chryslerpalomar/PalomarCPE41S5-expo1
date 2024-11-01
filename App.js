// App.js
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList'; 
import { MaterialIcons } from '@expo/vector-icons'; // Material Icons for demonstration
import { FontAwesome } from '@expo/vector-icons'; // Correctly import FontAwesome

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, key: Math.random().toString() }
    ]);
  }

  function deleteGoalHandler(goalId) {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.key !== goalId));
  }

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
        <FontAwesome name="user" size={60} color="#007AFF" />
      </View>

      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler} />

        <View style={styles.goalListContainer}>
          <Text style={styles.goalTitle}>List of Goals - Chrysler Palomar</Text>
          <GoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
        </View>
      </View>
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
});
