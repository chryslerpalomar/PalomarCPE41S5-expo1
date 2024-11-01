// GoalList.js

import React from 'react';
import { FlatList } from 'react-native';
import GoalItem from './GoalItem';

function GoalList({ goals, onDeleteGoal }) {
  return (
    <FlatList
      data={goals}
      renderItem={(itemData) => (
        <GoalItem
          text={itemData.item.text}
          id={itemData.item.key}
          onDeleteGoal={onDeleteGoal}
        />
      )}
      keyExtractor={(item) => item.key}
    />
  );
}

export default GoalList;
