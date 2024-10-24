// GoalInput.js
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'; 

function GoalInput(props) { 
  const [enteredGoalText, setEnteredGoalText] = useState(''); 

  function textInputHandler(enteredText) { 
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() { 
    props.onAddGoal(enteredGoalText); 
    setEnteredGoalText(''); 
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        placeholderTextColor="#cccccc"
        style={styles.textInput}
        onChangeText={textInputHandler} 
        value={enteredGoalText} 
      />
      <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}> 
        <Text style={styles.addButtonText}>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', 
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#00bfff',
    color: '#fff',
    width: '70%', 
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 71, 171, 0.25)',
    marginRight: 10, 
  },
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
});

export default GoalInput; 
