export type TrimType = {
    initialed: boolean
}
export type UserDataType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type MessageDataType = {
    id: number
    message: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type PostDataType = {
    id: number | null
    header: string
    content: string
    data: any
}
export type PhotosType = {
    small: string
    large: string
}
