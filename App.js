// App.js
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput'; 
import GoalList from './components/GoalList'; // Importing GoalList component

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.baltana.com/files/wallpapers-17/Beautiful-Stars-HD-Wallpapers-43701.jpg' }}
        style={styles.backgroundImage}>
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler} /> 

        <View style={styles.goalListContainer}>
          <Text style={styles.goalTitle}>      List of Goals - Chrysler Palomar      </Text>
          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => (
              <GoalItem text={itemData.item.text} /> 
            )}
            keyExtractor={(item) => item.key} // Set unique key for FlatList
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
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
  appContainer: {
    padding: 50,
    width: '100%', 
    alignItems: 'center', 
  },
  goalListContainer: {
    maxHeight: 650, // Adjust as needed
    marginTop: 20,
    alignItems: 'center',
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
  },
});
