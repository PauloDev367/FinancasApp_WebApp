import { API_URL } from "./constants";
import axios from "axios";

const token = window.localStorage.getItem("token");
const bankAccountId = window.localStorage.getItem("main-account-id");

export const getAllEntries = (page, perPage) => {
    return axios.get(`${API_URL}/entries/bank-account/${bankAccountId}?pageSize=${perPage}&pageIndex=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}