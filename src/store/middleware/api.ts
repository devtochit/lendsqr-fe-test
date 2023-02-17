import axios from "axios";
import * as actions from "../apiActions";

const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const {
      url,
      data,
      params,
      onSuccess,
      onError,
      onStart,
      method,
      extraheaders,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);
    try {
      const response = await axios.request({
        method,
        baseURL: "http://localhost:1338/",
        url,
        params: params,
        data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: extraheaders,
        },
      });

      // Default

      dispatch(actions.apiCallSuccess(response.data));
      console.log("res: ", response);
      // Specific
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
        // window.location.reload()
      }
    } catch (error: any) {
      // Default
      dispatch(actions.apiCallFailed(error));

      // Specific
      if (onError) dispatch({ type: onError, payload: error });
    }
  };

export default api;
