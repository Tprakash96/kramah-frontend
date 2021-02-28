import { toast } from "react-toastify";
import { apiCall } from "../../utils/helper";

export const fetchList = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_LIST_START" });
    try {
      const list = await apiCall("list", "GET");
      dispatch({ type: "GET_LIST_SUCCESS", list });
    } catch (e) {
      dispatch({ type: "GET_LIST_FAILURE" });
    }
  };
};

export const submitList = (data, cb) => {
  return async (dispatch) => {
    dispatch({ type: "SUBMIT_LIST_START" });
    try {
      const list = await apiCall("list", "POST", { list: data });
      dispatch({ type: "SUBMIT_LIST_SUCCESS", list });
      cb();
      toast.success(`${data && data.join(",")} values submitted`);
    } catch (e) {
      toast.error(e);
      dispatch({ type: "SUBMIT_LIST_FAILURE" });
    }
  };
};
