import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStoreContext } from '../store/RootStore';

interface WorkoutHistoryProps {}

export const WorkoutHistory: React.FC<WorkoutHistoryProps> = observer(({}) => {
  const rootStore = useContext(RootStoreContext);
   
  return (
    <View>
      <Text>Workout History Page</Text>
      <Button title="Create Workout" 
              onPress={() => { 
                rootStore.workoutStore.currentExcercises.push({
                  excercise: 'Squat',
                  numSets: 5,
                  reps: 5,
                  sets: ['', '', '', '', ''],
                  weight: 260
                },{
                  excercise: 'Bench Press',
                  numSets: 5,
                  reps: 5,
                  sets: ['', '', '', '', ''],
                  weight: 200
                },{
                  excercise: 'Deadlift',
                  numSets: 1,
                  reps: 5,
                  sets: ['', 'x', 'x', 'x', 'x'],
                  weight: 360
                });
                rootStore.routesStore.screen = 'CurrentWorkout' 
              }} />
    </View>
  );
});
