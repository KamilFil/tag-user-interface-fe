import axios from "axios";
import {Tag} from "../src/views/TablePagination/TablePagination";


const api = axios.create({baseURL: 'https://api.stackexchange.com/2.3', withCredentials: false});

//TagsPath

export const apiTag = () => api.get<Tag[]>('/tags?order=desc&sort=popular&site=stackoverflow')
