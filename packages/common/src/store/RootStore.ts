import { createContext } from "react";
import { RoutesStore } from "./RoutesStore";
import { WorkoutStore } from "./WorkoutStore";

export class RootStore {
  routesStore = new RoutesStore(this);
  workoutStore = new WorkoutStore(this);
}

export const RootStoreContext = createContext(new RootStore());
