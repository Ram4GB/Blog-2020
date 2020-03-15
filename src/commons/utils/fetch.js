import Axios from "axios";

export const fetchLoading = async ({ url, method, data }) => {
  return Axios({
    url,
    method,
    data
  });
};

export const url = "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos";

export default null;
