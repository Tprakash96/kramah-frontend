import axios from "axios";
import { toast } from "react-toastify";

const apiBaseURL = "http://localhost:8080/api/";
const instance = axios.create({ baseURL: apiBaseURL });

export const apiCall = async (url = "", method, body) => {
  let response = "";
  
  if (method === "POST")  
    await instance
    .post(url, { ...body })
    .then((res)=>{ 
      const {status, errMsgs} = res.data;
      if(status===3000) errMsgs.forEach(err=>toast.error(err.msg));
      else response = res.data; 
    });
  
  else if (method === "GET") 
    await instance
    .get(url)
    .then(res=> response = res.data);
  
    return response;
};
