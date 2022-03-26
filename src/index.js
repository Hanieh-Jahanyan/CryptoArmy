import React from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
import 'antd/dist/antd.css'
ReactDOM.render(
    
       <Router>
         <Provider store={store} >
       <App/>
       </Provider>
       </Router>
   ,
    document.getElementById('root')
)