/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 04/02/16.
 */

'use strict';

import constants from '../constants';

function createRequest(type, data) {
    return {
        type: type,
        data: data
    }
}

export function logIn(usn, pass) {
    return dispatch => {
        dispatch(createRequest(constants.LOGIN_USER_REQUEST));
        let promise = fetch(URL, {
            body: JSON.stringify({
                userName: usn,
                password: pass
            })
        });

        promise.then(json => {
            let employeeData = JSON.parse(json);
            dispatch(createRequest(constants.LOGIN_USER_SUCCESS, employeeData));
        })
        .catch(err => {
            dispatch(createRequest(constants.LOGIN_USER_ERROR, err));
        });

    };
}

export function logout() {
    return dispatch => {
//
        //
        dispatch(createRequest(constants.LOGGOUT_SUCCESS, employeeData));
    }
}