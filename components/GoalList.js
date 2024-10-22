// GoalList.js
import React from 'react';
import { View } from 'react-native';
import GoalItem from './GoalItem';

function GoalList({ goals }) {
  return (
    <View style={{ width: '100%' }}>
      {goals.map(goal => (
        <GoalItem key={goal.key} text={goal.text} /> // #2 Using GoalItem to display each goal
      ))}
    </View>
  );
}

export default GoalList;
