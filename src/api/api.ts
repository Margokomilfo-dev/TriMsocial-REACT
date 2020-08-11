import axios from "axios"
import {PhotosType, ProfileType, UserDataType} from "../redux/types"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":"e7b6af04-c260-4513-94b0-55bfc322dd6e"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type GetAllUsersResponseType = {
    items: Array<UserDataType>
    totalCount: number
    error: string | null
}
type Response = {
    resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
    data: any
}

export const allUsersAPI = {
    getAllUsers(currentPage: number, countUsersOnPage: number) {
        return instance.get<GetAllUsersResponseType>(`users?page=${currentPage}&count=${countUsersOnPage}`)
            .then(response => {
                return response.data
            })
    },
    followDelete(id: number) {
        return instance.delete<Response>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followPost(id: number) {
        return instance.post<Response>(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}

type SavePhotoType= {
    data: PhotosType
    resultCode: number
    messages: Array<string>
}
export const mainAPI = {
    getUserProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    saveNewData(profile: ProfileType) {
        return instance.put<Response>(`profile`, profile)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId: number){
        return instance.get<string>(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus(status: string){
        return instance.put<Response>(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    savePhoto(photoFile: any){
        const formData = new FormData();
        formData.append('image', photoFile)

        return instance.put<SavePhotoType>(`profile/photo`, formData)
            .then(response => {
                return response.data
            })
    }
};

type MeType = {
    data: { id: number, email: string, login: string }
    resultCode: number
    messages: Array<string>
}
type CaptchaType = {
    url: string
}
export const headerAPI = {
    me () {
        return instance.get<MeType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string| null = null ){
        return instance.post<Response>(`/auth/login`, {email, password, rememberMe, captcha})
        .then(response => {
            return response.data
        })
    },
    logout(){
        return instance.delete<Response>(`/auth/login`)
            .then(response => {
                return response.data
            })
    },
    captcha(){
        return instance.get<CaptchaType>(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })
    },
    getURLPhoto (userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    }

};