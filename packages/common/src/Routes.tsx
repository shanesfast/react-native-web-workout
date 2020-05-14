import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { RoutesStoreContext } from "./store/RoutesStore";

export const Routes = observer(() => {
  const routesStore = useContext(RoutesStoreContext);

  return routesStore.screen === 'WorkoutHistory' ? <WorkoutHistory /> : <CurrentWorkout />
});
