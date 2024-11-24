import { API_URL } from "./constants";
import axios from "axios";

export const loginUser = (email, password) => {
    return axios.post(`${API_URL}/login`, {
        password: password,
        username: email
    });
};

