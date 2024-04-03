import axios from "axios";



const api = axios.create({baseURL: 'https://api.stackexchange.com/2.3', withCredentials: false});

//TagsPath

export const apiTag = () => api.get('/tags?order=desc&sort=popular&site=stackoverflow')
