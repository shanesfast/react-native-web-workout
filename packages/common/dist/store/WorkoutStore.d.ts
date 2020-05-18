import { RootStore } from "./RootStore";
declare type WorkoutDay = 'a' | 'b';
interface WorkoutHistory {
    [key: string]: Array<{
        excercise: string;
        value: number;
    }>;
}
interface CurrentExcercises {
    weight: number;
    reps: number;
    numSets: number;
    excercise: string;
    sets: string[];
}
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadLift: number;
    currentBarbellRow: number;
    lastWorkoutType: WorkoutDay;
    currentExcercises: CurrentExcercises[];
    history: WorkoutHistory;
}
export {};
