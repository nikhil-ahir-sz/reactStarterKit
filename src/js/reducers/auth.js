import constants from '../constants';
import _ from 'lodash';

const initialState = {
    employeeData: null,
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default auth = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN_USER_SUCCESS:
            //state.employeeData = action.data;
            return _.assign({}, state, {
                employeeData: action.data,
                isAuthenticating: false
            });
        case constants.LOGIN_USER_REQUEST:
            //state.employeeData = action.data;
            return _.assign({}, state, {
                isAuthenticating: true
            });
        default:
            return state
    }
}