import React, { Component } from 'react';
import { Link } from 'react-router'

import '../styles/1.less';
import store from '../redux/test.js';

class Test extends React.Component {
    render() {
        return (
            <div className="a">
                <div>
                    {store.getState().test}
                     <Link to="/greeter">to greeter</Link> 
                </div>
            </div>
        );
    }
}
store.subscribe(Test);
export default Test