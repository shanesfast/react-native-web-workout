import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStoreContext } from '../store/RootStore';
import { WorkoutCard } from '../ui/WorkoutCard';

interface CurrentWorkoutProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(222, 237, 250)",
    padding: 10
  }
});

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = observer(({}) => {
  const rootStore = useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      { rootStore.workoutStore.currentExcercises.map(e => {
        return (
          <WorkoutCard key={e.excercise}
          onSetPress={setIndex => {
            const v = e.sets[setIndex];
            let newValue: string;

            if (v === '') newValue = `${e.reps}`;
            else if (v === '0') newValue = '';
            else newValue = `${parseInt(v) - 1}`;

            e.sets[setIndex] = newValue;
          }}
          sets={e.sets} 
          excercise={e.excercise} 
          repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`} />
        );
      }) }
    </View>
  );
});
