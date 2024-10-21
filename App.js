// #1: Importing necessary components, including ImageBackground for background image
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  // #2: Adding state for entered goal text and list of course goals
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // #3: Handler for input text, updating enteredGoalText
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  // #4: Adding goal to courseGoals and clearing input afterward
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText(''); // Clear input after adding goal
  };

  // #5: Return block - Adding background image, TextInput for adding goals, and displaying the list of goals
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.baltana.com/files/wallpapers-17/Beautiful-Stars-HD-Wallpapers-43701.jpg' }}
        style={styles.backgroundImage}>
        
        {/* Overlay view to add the faded grey effect */}
        <View style={styles.overlay} />
      </ImageBackground>
  
      {/* Rest of the content placed outside the overlay */}
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your course goal!"
            placeholderTextColor="#cccccc"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
            <Text style={styles.addButtonText}>Add Goal</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.goalsContainer}>
          <Text style={styles.goalTitle}>        List of Goals - Chrysler Palomar        </Text>
          {courseGoals.map((goal, index) => (
            <Text key={index} style={styles.goalItem}>{goal}</Text>
          ))}
        </View>
      </View>
    </View>
  );  
}

// #7: Adding styles - background image, input, and goal list styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container fills the screen
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute', // Keep the background fixed
    width: '100%', // Cover the full width
    height: '100%', // Cover the full height
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 20, 0.5)', // Faded grey overlay
  },

  
  appContainer: {
    padding: 50,
    width: '100%', // Ensure the container takes full width
    alignItems: 'center', // Center items horizontally
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centering the input and button horizontally
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', // Ensuring the input container takes full width
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#00bfff',
    color: '#fff',
    width: '70%', // Adjusted for better responsiveness
    padding: 10,
    borderRadius: 5,
    //backgroundColor: '#858f8b',
    backgroundColor: 'rgba(0, 71, 171, 0.25)',
    marginRight: 10, // Adding space between text input and button
  },

  // #8: Adding styles for custom button
  addButton: {
    backgroundColor: 'rgba(0, 71, 171, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00bfff',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  goalsContainer: {
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

  goalItem: {
    fontSize: 16,
    color: '#fff',
    //backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'rgba(0, 71, 171, 0.2)',
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%', // Ensure goals take a consistent width
    textAlign: 'center', // Center text in goal items
  },
});
