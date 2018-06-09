import UserRegistrationComponent from './../components/UserRegistrationComponent';
import { connect } from 'react-redux';
import {updateUserData} from './../actions/userData';
import {setBmrMODAL} from './../actions/bmrModal';

const mapStateToProps = state => {
    return {
        userState: state.userData,
        bmrModal: state.bmrModal,
        bmr:state.bmr.bmr
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateUserData: (e, { name, value })=> {
            dispatch(updateUserData({[name]:value}))
        },
        toggleBmrModal: (state, e) => {
            dispatch(setBmrMODAL(state));
        }
    }
}

const UserRegistration = connect(mapStateToProps, mapDispatchToProps)(UserRegistrationComponent);

export default UserRegistration;