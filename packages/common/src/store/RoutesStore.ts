import { observable } from 'mobx';
import { createContext } from 'react';

type Routes = 'WorkoutHistory' | 'CurrentWorkout';

class RoutesStore {
  @observable screen: Routes = "CurrentWorkout";
}

export const RoutesStoreContext = createContext(new RoutesStore());
