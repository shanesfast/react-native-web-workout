/// <reference types="react" />
declare type Routes = 'WorkoutHistory' | 'CurrentWorkout';
declare class RoutesStore {
    screen: Routes;
}
export declare const RoutesStoreContext: import("react").Context<RoutesStore>;
export {};
