// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

// import React, {Component}from 'react'; // react核心，用到jsx的地方，都需要这个
// import ReactDOM from 'react-dom';   // 渲染组件时需要

// // import { createStore, combineReducers } from 'redux'
// // import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// import Test from './js/test.jsx'

// class Greeter extends Component{
//   render() {
//     return (
//       <div className="a">
//         <div>
//           {store.getState().test}
//         </div>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Greeter />
//   //  <Provider store={store}>
//       // <Router path="/app/js" history={history}>
//       //     {/* <IndexRoute component={Test}/> */}
//       //     <Route path="greeter" component={Greeter}/>
//       // </Router>
//   // </Provider>
//   ,
//   document.getElementById('root') //  这个app-root是在index.html中写的div,其id为app-root
// );
import React from 'react';  
import ReactDOM  from 'react-dom';  
import { hashHistory } from 'react-router';
  
import RouteMap from './router/router'  
  
ReactDOM.render(  
    <RouteMap history={hashHistory}/>, 
    document.getElementById('root')  
)