import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WorkoutCardProps {
  excercise: string;
  repsAndWeight: string;
  sets: string[];
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "column",
    padding: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    backgroundColor: "#418BCC",
    borderRadius: 15,
  },
  whiteFont: {
    color: '#fff'
  },
  circleFont: {
    fontSize: 15
  },
  grayBG: {
    backgroundColor: "#4F6980"
  }, 
  grayFont: {
    color: "#DEEDFA"
  }
});

export const WorkoutCard: React.FC<WorkoutCardProps> = ({excercise, repsAndWeight, sets}) => {
    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.topRowText}>{excercise}</Text>
          <Text style={styles.topRowText}>{repsAndWeight}</Text>
        </View>
        <View style={styles.bottomRow}>
          {sets.map((set, index) => {
            if (set === 'x') return (
              <View key={set + index} style={[styles.circle, styles.grayBG]}>
                <Text style={styles.grayFont}>X</Text>
              </View>
            );

            if (set === '') return (<View style={[styles.circle, styles.grayBG]} />);

            return (
              <View key={set + index} style={styles.circle}>
                <Text style={styles.whiteFont}>{set}</Text>
              </View>
            )
          })}
        </View>
      </View>
    );
}
