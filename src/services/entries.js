import { API_URL } from "./constants";
import axios from "axios";

const token = window.localStorage.getItem("token");
const bankAccountId = window.localStorage.getItem("main-account-id");

export const getAllEntries = (page, perPage, year = null, month = null) => {
    let baseurl = `${API_URL}/entries/bank-account/${bankAccountId}?pageSize=${perPage}&pageIndex=${page}`;
    if(year != null){
        baseurl +=`&year=${year}`;
    }
    if(month != null){
        baseurl +=`&month=${month}`;
    }

    return axios.get(
        baseurl,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
}