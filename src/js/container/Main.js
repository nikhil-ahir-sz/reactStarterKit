/**
 * Created by nikhila on 29/12/15.
 */

var React = require('react');
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as auth from './../actions/auth';

import SomePage from './SomePage';

class Main extends React.Component {
    constructor() {
        super();
        this.data = {

        };
        this.state = {
            isLoaded: false, //true
            a: 10,
            b: 30,
            c: null
        };
    }

    componentDidMount() {
        var id = setInterval(() => {
            this.setState({
                b: 40
            });
            clearInterval(id);
        }, 1000);
    }

    onSubmit() {
        this.refs.somPage.isHere();
        let isValidForm = true;
        //ReactDOM.findDOMNode(this.refs.usrName).value;
        this.refs.forEach(ref => {
            isValidForm = ref.validate();
        });

        let usrn, pass;
        usrn = ReactDOM.findDOMNode(this.refs.usrName).value;
        pass = ReactDOM.findDOMNode(this.refs.password).value;

        this.props.authAction.logIn(usrn, pass);
    }

    render() {

        let { isAuthenticating, employeeData } = this.props.auth;

        if( employeeData ) {
            return (
                <Employee employeeData={employeeData}/>
            );
        }

        if(isAuthenticating) {
            return (
                <Loading />
            );
        }

        return (
            <div className="abc" style={styles.container}>

                <input
                    ref="usrName" type="text"
                    placeholder="userName"/>
                <input
                    ref="password" type="text" placeholder="password"/>
                <Submit onClick={this.onSubmit.bind(this)}/>


            </div>
        );
    }
}

var styles = {
    container: {
        width: 200,
        height: 200
    }
};

let bindToProps = state => ({
    isAuthenticating: state.auth.isAuthenticating,
    employeeData: state.auth.employeeData
});

let bindActions = (dispatch) => ({
    authAction: bindActionCreators(auth, dispatch)
});

export default connect(bindToProps, bindActions)(Main);
