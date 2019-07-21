/*eslint-disable no-unused-vars*/
import React from "react";
import App from "./App";
/*eslint-enable no-unused-vars*/
import {Provider} from 'react-redux'
import ReactDom from "react-dom";
import store from './Actions/store'
import connect from 'react-redux'


const All = (
<Provider store={store}>
    <App/>
</Provider>
);

ReactDom.render(All, document.getElementById("root"));
