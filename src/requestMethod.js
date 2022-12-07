import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzZiODE1NjlhNzdmZjU0YTQ0MzFhMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDUzMDU2OSwiZXhwIjoxNjY0NzAzMzY5fQ.nIqu64tm5jxAACU-PKesEOTHF56WwiG-T9XX4dhPS_I'


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})