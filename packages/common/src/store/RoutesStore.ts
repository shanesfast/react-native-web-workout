import { observable } from 'mobx';
import { RootStore } from './RootStore';

type Routes = 'WorkoutHistory' | 'CurrentWorkout';

export class RoutesStore {
  rootStore: RootStore;
  
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable screen: Routes = "WorkoutHistory";
}
