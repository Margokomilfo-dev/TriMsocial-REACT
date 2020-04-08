import { addMess } from '../../../../redux/message_reducer';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../redux/HOC";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText,
        isLogin: state.auth.isLogin
    }
};

export default compose(
    connect(mapStateToProps, {addMess}),
    withAuthRedirect
)(Messages)


