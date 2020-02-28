import React from 'react'
import s from './AllUsers.module.css'
import * as axios from 'axios'
import photo from './pic/nophoto.png'

let AllUsers = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            })
            // props.setUsers(
            //     [
            //         {id: 1, photolink: 'https://www.bing.com/th/id/OIP.kDkPa9Ugku-r8Q3c_9OUuAAAAA?w=116&h=300&c=7&o=5&pid=1.7',
            //             followed: false, fullname: 'Margo', nickname: 'margoshka', status: 'I am a boss', localisation: {country: 'Poland', cityname: 'Wroclaw'}  },
            //         {id: 2, photolink: 'https://www.bing.com/th?id=OIP.TXege_wKXD1x4Tr_kHT__QHaKh&pid=Api&rs=1',
            //             followed: true, fullname: 'Kate', nickname: 'katushka', status: 'I am a boss, too', localisation: {country: 'Poland', cityname: 'Krakow'}  },
            //         {id: 3, photolink: 'https://i.insider.com/5aa10ca0d877e618008b4678?width=1100&format=jpeg&auto=webp',
            //             followed: true, fullname: 'Mia', nickname: 'Mija', status: 'I am a little-boss', localisation: {country: 'Poland', cityname: 'Wroclaw'}  },
            //         {id: 4, photolink: 'https://img.favpng.com/15/3/24/kion-simba-lion-nala-disney-junior-png-favpng-yPCg6Bur9WV3jCagMjxL54mn1.jpg',
            //             followed: false, fullname: 'Leo', nickname: 'Lev ', status: 'I am a little-boss, too', localisation: {country: 'Poland', cityname: 'Wroclaw'}  },
            //     ]
            // )
        }
    }

    return (<div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u =>
                    <div className={s.user_container} key={u.id}>


                        <div className={s.left}>
                            <div className={s.photo}>
                                <img src={u.photos.small != null ? u.photos.small : photo} alt="logo"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button className={`${s.unfollow} ${s.button}`}
                                              onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button className={`${s.follow} ${s.button}`}
                                              onClick={() => props.follow(u.id)}>Follow</button>
                                }
                            </div>
                        </div>

                        <div className={s.right}>
                            <div className={s.dataUser}>
                                <div className={s.fullname}>{u.name} <span>(@{"u.nickname"})</span></div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.location}>
                                <span className={s.cityName}>{"u.localisation.cityname"}</span>/<span
                                className={s.country}>{"u.localisation.country"}</span>


                            </div>
                        </div>
                    </div>
                )
            }</div>
    )
}

export default AllUsers