import { API_URL } from "./constants";
import axios from "axios";

const token = window.localStorage.getItem("token");

export const getBankAccounts = (page) => {
    return axios.get(`${API_URL}/bank-accounts?pageSize=10&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}