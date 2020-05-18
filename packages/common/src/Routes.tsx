import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { RootStoreContext } from "./store/RootStore";

export const Routes = observer(() => {
  const rootStore = useContext(RootStoreContext);

  return rootStore.routesStore.screen === 'WorkoutHistory' ? <WorkoutHistory /> : <CurrentWorkout />
});
