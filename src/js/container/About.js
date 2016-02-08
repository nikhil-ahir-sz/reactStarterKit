/**
 * Created by nikhila on 29/12/15.
 */

var React = require('react');
let {
    Link
    } = require('react-router');


export default class About extends React.Component {
    constructor(props) {
        super(props);


    }
    componentWillMount() {
        console.log('componentWillMount::');
    }
    componentDidMount() {
        console.log('componentDidMount::');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps::', nextProps);

    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    render() {
        console.log('render');
        const id = this.props.params.id;

        return (
            <div>
                About...{id}
                <Link to={"/abc"}>abc</Link>
            </div>
        );
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

About.propTypes = {

};