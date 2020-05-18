/// <reference types="react" />
import { RoutesStore } from "./RoutesStore";
import { WorkoutStore } from "./WorkoutStore";
export declare class RootStore {
    routesStore: RoutesStore;
    workoutStore: WorkoutStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
