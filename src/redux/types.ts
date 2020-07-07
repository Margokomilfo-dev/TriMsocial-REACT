export type UserDataType = {
    id: number
    name: string
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
    contacts: Array<ContactsType>
}
export type PostDataType = {
    id: number
    header: string
    content: string
    data: any
}
export type PhotosType = {
    small: string
    large: string
}