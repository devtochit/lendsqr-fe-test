import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import {
  retrieveUserDetails,
  storeUserDetails,
} from "../../../utils/helperFunctions/userDataHandlers";

const initialState: {
  userData: { data: any } | null;
  loading: boolean;
} = {
  userData: null,
  loading: false,
};

const getProfileSlice = createSlice({
  name: "getProfile",
  initialState,
  reducers: {
    getProfileRequested: (state, action) => {
      state.loading = true;
    },
    getProfileReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log("getProfileReceived", action.payload);
    },
    getProfileRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getProfileRequestFailed", action.payload);
    },
  },
});

const { getProfileRequested, getProfileReceived, getProfileRequestFailed } =
  getProfileSlice.actions;

export default getProfileSlice.reducer;

export const getProfile = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      console.log("token", token);
      dispatch(
        apiCallBegan({
          url: PRE_URL + "user/profile/",
          extraheaders: "Token " + token,
          method: "get",
          onStart: getProfileRequested.type,
          onSuccess: getProfileReceived.type,
          onError: getProfileRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getProfileRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occurred while fetching user profile:", error);
    dispatch(getProfileRequestFailed(error.message));
  }
};
