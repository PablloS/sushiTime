import axios from "axios";

export const API_URL : string = `https://testjob.checkport.ru`; 

const $api = axios.create({
    baseURL: API_URL 
})

export default $api; 