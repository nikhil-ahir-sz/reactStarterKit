/**
 * Created by nikhila on 29/12/15.
 */

var React = require('react');

export default class SomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            error: false
        };
    }
    componentWillMount() {
        console.log('componentWillMount::');
    }
    componentDidMount() {
        console.log('componentDidMount::');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps::', nextProps);
        if(this.state.data != nextProps.data) {
            this.setState({
                data: nextProps.data
            });
        }
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    validate() {
        switch(this.props.type) {
            case 'tel':
                isValid = regextocheckPhonenos();
                if( isValid() ) {
                    return true;
                } else {
                    this.setState({
                        error: true
                    });
                }


            case 'tel':
                return validaEmail() ? true : false;
        }
    }
    render() {
        console.log('render');
        if( this.state.error ) {
            errMessage = "ERROR"
        }
        return (
            <div>
                <input type="text"/>
                {errMessage}
            </div>
        );
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

SomePage.propTypes = {
    data: React.PropTypes.number.isRequired
};