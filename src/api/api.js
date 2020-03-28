import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "40ffb3ac-7a26-461e-9d58-b5b7054c7f94"
    }
});

export const allUsersAPI = {
    getAllUsers(currentPage, countUsersOnPage) {
        return instance.get(`users?page=${currentPage}&count=${countUsersOnPage}`)
            .then(response => {
                return response.data
            })
    },
    followDelete(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followPost(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
};
export const mainAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId){
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus(status){
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
};
export const headerAPI = {
    me () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe=false){
        return instance.post(`/auth/login`, {email, password, rememberMe})
        .then(response => {
            return response.data
        })
    },
    logout(){
        return instance.delete(`/auth/login`)
            .then(response => {
                return response.data
            })
    },
    capcha(){
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })
    },
    getURLPhoto (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    }

};
