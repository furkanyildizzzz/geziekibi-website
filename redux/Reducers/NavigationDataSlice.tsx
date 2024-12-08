import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationDataState {
  data: {
    title: string;
    slugType: string;
    seoLink: string;
  };
}

const initialState: NavigationDataState = {
  data: {
    title: "",
    slugType: "",
    seoLink: "",
  },
};

const NavigationDataSlice = createSlice({
  name: "NavigationDataSlice",
  initialState,
  reducers: {
    setNavigationData: (
      state,
      action: PayloadAction<{
        name: keyof NavigationDataState["data"];
        value: string;
      }>
    ) => {
      const { name, value } = action.payload;
      state.data[name] = value;
    },
  },
});

export const { setNavigationData } = NavigationDataSlice.actions;

export default NavigationDataSlice.reducer;
