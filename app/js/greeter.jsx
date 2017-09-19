import React, {Component} from 'react';
import { Link } from 'react-router';

import '../styles/1.less';
import store from '../redux/test.js';

class Greeter extends React.Component{
  render() {
    return (
      <div className="a">
        <div>
          {store.getState().test}
          <Link to="/test">to test</Link>
        </div>
      </div>
    );
  }
}
store.subscribe(Greeter);
export default Greeter