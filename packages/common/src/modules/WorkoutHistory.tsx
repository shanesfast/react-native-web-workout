import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RoutesStoreContext } from '../store/RoutesStore';

interface WorkoutHistoryProps {}

export const WorkoutHistory: React.FC<WorkoutHistoryProps> = observer(({}) => {
  const routesStore = useContext(RoutesStoreContext);
   
  return (
    <View>
      <Text>Workout History Page</Text>
      <Button title="Create Workout" onPress={() => { routesStore.screen = 'CurrentWorkout' }} />
    </View>
  );
});