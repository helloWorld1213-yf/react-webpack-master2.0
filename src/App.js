/*eslint-disable no-unused-vars*/
import React,{Component} from "react";
/*eslint-enable no-unused-vars*/

//antd引入样式
import 'antd/dist/antd.css';
//antd引入组件
import {Button} from 'antd';
import {Switch} from 'antd';
import {DatePicker} from 'antd';

class App extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
        <div>
          App组件
          <ul>
            <li>aaa</li>
          </ul>

          <Button/>
          <Switch/>
          <DatePicker/>

        </div>
    );
  }
}

export default App;

