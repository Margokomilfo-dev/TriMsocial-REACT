import React from 'react'
import s from './AllUsers.module.css'
import * as axios from 'axios'
import photo from './pic/nophoto.png'

class AllUsers extends React.Component {
    componentDidMount() {
         if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                this.props.setUsers(response.data.items)
            })
         }
    }

    render() {
        return (
            this.props.users.map(u =>
                <div className={s.user_container} key={u.id}>

                    <div className={s.left}>
                        <div className={s.photo}>
                            <img src={u.photos.small != null ? u.photos.small : photo} alt="logo"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={`${s.unfollow} ${s.button}`}
                                          onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button className={`${s.follow} ${s.button}`}
                                          onClick={() => this.props.follow(u.id)}>Follow</button>
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
        )
    }
}


export default AllUsers