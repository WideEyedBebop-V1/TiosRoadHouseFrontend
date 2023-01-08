import axios from "axios";

export const baseURL = import.meta.env.VITE_SERVERURL

export let API = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

API.defaults.withCredentials = true

export default API;