let FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SETUSERS = 'SETUSERS'

let inicialization = {
    users: [
        // {id: 1, photolink: 'https://www.bing.com/th/id/OIP.kDkPa9Ugku-r8Q3c_9OUuAAAAA?w=116&h=300&c=7&o=5&pid=1.7',
        //     followed: false, fullname: 'Margo', nickname: 'margoshka', status: 'I am a boss', localisation: {country: 'Poland', cityname: 'Wroclaw'}  },
        // {id: 2, photolink: 'https://www.bing.com/th?id=OIP.TXege_wKXD1x4Tr_kHT__QHaKh&pid=Api&rs=1',
        //     followed: true, fullname: 'Kate', nickname: 'katushka', status: 'I am a boss, too', localisation: {country: 'Poland', cityname: 'Krakow'}  },
        // {id: 3, photolink: 'https://i.insider.com/5aa10ca0d877e618008b4678?width=1100&format=jpeg&auto=webp',
        //     followed: true, fullname: 'Mia', nickname: 'Mija', status: 'I am a little-boss', localisation: {country: 'Poland', cityname: 'Wroclaw'}  },
        // {id: 4, photolink: 'https://img.favpng.com/15/3/24/kion-simba-lion-nala-disney-junior-png-favpng-yPCg6Bur9WV3jCagMjxL54mn1.jpg',
        //     followed: false, fullname: 'Leo', nickname: 'Lev ', status: 'I am a little-boss, too', localisation: {country: 'Poland', cityname: 'Wroclaw'}  },
    ]
}

const usersReducer = (state = inicialization, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SETUSERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userid) => ({type: FOLLOW, userid});
export const unfollowAC = (userid) => ({type: UNFOLLOW, userid});
export const setUsersAC = (users) => ({type: SETUSERS, users})
export default usersReducer;