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
    <ImageBackground
      source={{ uri: 'https://www.baltana.com/files/wallpapers-17/Beautiful-Stars-HD-Wallpapers-43701.jpg' }}
      style={styles.backgroundImage}>

      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your course goal!"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText} // Controlled input
          />
          
          {/* #6: Using TouchableOpacity for custom button styling */}
          <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
            <Text style={styles.addButtonText}>Add Goal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.goalsContainer}>
          <Text style={styles.goalTitle}>List of Goals - Chrysler Palomar</Text> {/* Adding proof of work */}
          {courseGoals.map((goal, index) => (
            <Text key={index} style={styles.goalItem}>{goal}</Text> /* Displaying list of goals */
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

// #7: Adding styles - background image, input, and goal list styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start', // Keeping vertical alignment at the top
    alignItems: 'center', // Centering items horizontally
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
    borderColor: '#003399',
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
    backgroundColor: 'rgba(0, 71, 171, 0.5)', // Example color: orange with 80% opacity
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  goalsContainer: {
    marginTop: 20,
    alignItems: 'center', // Centering the goal items horizontally
  },

  goalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },

  goalItem: {
    fontSize: 16,
    color: '#fff',
    //backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'rgba(0, 71, 171, 0.2)',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%', // Ensure goals take a consistent width
    textAlign: 'center', // Center text in goal items
  },
});
