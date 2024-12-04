import { API_URL } from "./constants";
import axios from "axios";

const token = window.localStorage.getItem("token");
const bankAccountId = window.localStorage.getItem("main-account-id");

export const getAllIncomeCategories = (page, perPage) => {
    let baseurl = `${API_URL}/income-categories?pageSize=${perPage}&pageIndex=${page}`;

    return axios.get(
        baseurl,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
}

export const createIncomeEntry = (price, incomeCategoryId, title, bankACcountId, note = null, date = null) => {
    const data = {
        "entryType": "INCOME",
        "price": price,
        "IncomeCategoryId": incomeCategoryId,
        "title": title,
        "bankAccountId": bankACcountId,
        "note": note,
        "payed": date == null ? false : true,
        "dataWhenPayed": date == null ? "2000-01-01" : date
    }

    return axios.post(`${API_URL}/entries`, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
}