/**
 * Created by nikhila on 9/25/2015.
 */
let React = require('react');
let {
    Router,
    Route,
    DefaultRoute,
    NotFoundRoute
    } = require('react-router');

//let Main = require('./js/container/Main');
import Main from './js/container/Main';
import About from './js/container/About';
//let SomePage = require('./js/container/SomePage');
import SomePage from './js/container/SomePage';

var Routes = (
    <Router>
        <Route path='/' component={App}>
            <Route path='/about/:id' component={About} />
            <Route path='/abc' component={Abc} />
        </Route>
    </Router>
);

export default Routes;