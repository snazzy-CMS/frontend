import axios from "axios";

function axiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "endpoint",
    headers: {
      Authorization: token
    }
  });
}

export default axiosWithAuth;
