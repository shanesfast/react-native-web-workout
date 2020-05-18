import { RootStore } from './RootStore';
declare type Routes = 'WorkoutHistory' | 'CurrentWorkout';
export declare class RoutesStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    screen: Routes;
}
export {};
