import React from 'react'  
import { Router, Route, IndexRoute, browserHistory } from 'react-router'  

import App from '../js/app.jsx';
import Greeter from '../js/greeter.jsx';
import Test from '../js/test.jsx';
  
class RouteMap extends React.Component {  
    updateHandle() {  
        console.log('每次router变化之后都会触发')  
    }  
    render() {  
        return (  
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>  
                <Route path='/' component={App}>  
                     <IndexRoute component={Greeter}/>
                     <Route path="test" component={Test}/>
                     <Route path="greeter" component={Greeter}/>
                </Route>  
            </Router>  
        )  
    }  
}  
  
export default RouteMap 