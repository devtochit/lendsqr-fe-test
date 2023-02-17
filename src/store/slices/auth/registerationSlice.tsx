import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationRequested: (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    registrationSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    registrationFailed: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { registrationRequested, registrationSuccess, registrationFailed } = registrationSlice.actions;

export default registrationSlice.reducer;

export const register = (userData: any) => (dispatch: AppDispatch) => {
  dispatch(
    apiCallBegan({
      url: PRE_URL + "/auth/register",
      method: "post",
      data: userData,
      onStart: registrationRequested.type,
      onSuccess: registrationSuccess.type,
      onError: registrationFailed.type,
    })
  );
};
