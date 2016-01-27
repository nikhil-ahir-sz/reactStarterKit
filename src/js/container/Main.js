/**
 * Created by nikhila on 29/12/15.
 */

var React = require('react');

export default class Main extends React.Component {
    render() {
        return (
            <div>
                Hello from main...
                {this.props.children}
            </div>
        );
    }
}