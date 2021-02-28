import { toast } from "react-toastify";
import { apiCall } from "../../utils/helper";

export const signup = (data, cb) => {
    return async (dispatch) => {
      dispatch({ type: "SIGNUP_START" });
      try {
        const user = await apiCall("signup", "POST", { ...data });
        dispatch({ type: "SIGNUP_SUCCESS", user });
        cb();
        toast.success(`${data && data.join(",")} values submitted`);
      } catch (e) {
        toast.error(e);
        dispatch({ type: "SIGNUP_FAILURE" });
      }
    };
  };

  export const login = (data, cb) => {
    return async (dispatch) => {
      dispatch({ type: "LOGIN_START" });
      try {
        const user = await apiCall("login", "POST", { ...data });
        if(user) {
          cb();
          dispatch({ type: "LOGIN_SUCCESS", user });
          toast.success(`values submitted`);
        }
        else dispatch({ type: "LOGIN_FAILURE" });
      } catch (e) {
        toast.error(e);
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };
  };