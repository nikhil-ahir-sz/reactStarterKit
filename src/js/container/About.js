/**
 * Created by nikhila on 29/12/15.
 */

var React = require('react');

export default class SomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
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
    render() {
        console.log('render');
        return (
            <div>
                <span>{this.state.data}</span>
                Hello from SomePage...
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