/*eslint-disable no-unused-vars*/
import React,{Component} from "react";
/*eslint-enable no-unused-vars*/

//antd引入样式
import 'antd/dist/antd.css';
//antd引入组件
import WorkoverData from "./components/WorkoverData/WorkoverData"

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
            <WorkoverData/>
        </div>
    );
  }
}

export default App;
