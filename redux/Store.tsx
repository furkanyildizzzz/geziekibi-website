import { configureStore } from "@reduxjs/toolkit";
import NavigationDataSlice from "./Reducers/NavigationDataSlice";

const Store = configureStore({
  reducer: {
    navigationData: NavigationDataSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
