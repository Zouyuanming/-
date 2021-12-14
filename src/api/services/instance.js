
import axios from 'axios'

const API_ROOT = Glod.API_ROOT
axios.defaults.baseURL = API_ROOT
axios.defaults.timeout = 6000

// http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         const token = sessionStorage.getItem('token')
//         config.headers = {
//             'Content-Type': 'application/json'
//         }
//         config.headers.Authorization = token
//         return config
//     },
//     err => {
//         return Promise.reject(err)
//     })

// post 方法
export function post (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
    })
}

// get 方法
export function get (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
    })
}

export const exportFileRequest = (url, params) => {
    return axios({
        method: 'POST',
        url: url,
        data: params,
        responseType: 'blob',
        headers: {
        }
    })
}
