import React from 'react'
import s from './Main.module.css'
import Main_left from './Main_left/Main_left'
import MainRight from './Main_right/MainRight'
import Loader from "../common/Loader/Loader";


class Main extends React.Component {

    render() {
        if (!this.props.profile) {
            return <Loader/>
        }

        return (
            <div className={s.main}>
                <div className={s.main_wrapper}>
                    <Main_left store={this.props.store}
                               isOwner={this.props.isOwner}
                               friendData={this.props.state.mainPage.friendData}
                               savePhoto={this.props.savePhoto}

                               profile={this.props.profile}/>

                    <MainRight store={this.props.store}
                               personData={this.props.state.mainPage.personData}
                               isOwner={this.props.isOwner}
                               saveNewData={this.props.saveNewData}
                               userId={this.props.userId}

                               profile={this.props.profile}
                               status={this.props.status}
                               updateUserStatus={this.props.updateUserStatus}
                    />

                </div>
                {/*main_wrapper*/}
            </div>
        )
    }
}



export default Main

