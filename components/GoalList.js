import React from 'react';
import { FlatList, View } from 'react-native';
import GoalItem from './GoalItem';

function GoalList({ goals }) {
  return (
    <FlatList
      data={goals}
      renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
      keyExtractor={(item) => item.key}
      style={{ flex: 1 }}
    />
  );
}

export default GoalList;
