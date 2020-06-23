import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":"47179166-0404-4bba-a6c9-441eae4ccb60"
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
    saveNewData(profile) {
        return instance.put(`profile`, profile)
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
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData)
            .then(response => {
                return response.data
            })
    }
};
export const headerAPI = {
    me () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe=false, captcha=null ){
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
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
    captcha(){
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
