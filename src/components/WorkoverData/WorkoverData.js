import React, { Component,Fragment } from "react";
import axios from "axios"
import { Input,Button  } from 'antd';
import '../../../css/WorkoverData.css'

class WorkoverData extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue:"",
            show:true
        }
    }
    render() {
        const { TextArea } = Input;
        return (
            <Fragment>
                <br/><br/>
                <h1>作业标准</h1>
                <hr/>
                <br/>
                <div className="WorkoverData-header">
                    <span>标准名称</span>
                    <Input placeholder="项目名称" className="WorkoverData-searchInput"/>
                    <Button type="primary" className="WorkoverData-searchBtn">查询</Button>
                    <Button type="primary" className="WorkoverData-newStanderBtn">新增标准</Button>
                </div>

                <br/><br/><br/>

                <div className="WorkoverData-table">
                    <table align="center" border="1" width="70%" height="auto">

                        <tr bgcolor='#f8f8ff'  height="40px" align="center">
                            <td colSpan="5" align="center">修井标准</td>
                        </tr>
                        <tr bgcolor='#f8f8ff' height="35px" align="center">
                            <td width="8%">序号</td>
                            <td width="30%">标准名称</td>
                            <td width="42%">适用范围</td>
                            <td width="10%">附件下载</td>
                            <td width="10%">操作</td>
                        </tr>
                        <tr align="center"  height="35px">
                            <td width="8%">1</td>
                            <td width="30%">液体分离安装标准</td>
                            <td width="42%">适用于钻井、修井作业现场使用的分离器</td>
                            <td width="10%">
                                <span>下载</span>
                            </td>
                            <td width="10%">
                                <span>编辑</span>   &#8195;
                                <span>删除</span>

                            </td>
                        </tr>
                    </table>
                </div>


                {/*弹窗出来的添加界面 使用三目运算符类似实现 v-if 不要忘记jsx中可以直接写js哦*/}
                <div>
                    <button onClick={this.display.bind(this)}>
                        {this.state.show ? '点击隐藏' : '点击显示'}</button>
                    {
                        this.state.show
                            ?
                            <div className="WorkoverData-alert">
                                <div className="WorkoverData-alertHeader">
                                    <text>添加新标准</text>

                                    <div className="WorkoverData-alertHeaderX"
                                         onClick={this.display.bind(this)
                                         }>X
                                    </div>
                                </div>
                                <div className="WorkoverData-standerInput">
                                    <text>标准名称</text>
                                    <Input style={{marginLeft:'25px',width:"80%"}} placeholder="" />
                                </div>
                                <div className="WorkoverData-standerInput">
                                    <text>适用范围</text>
                                    <TextArea
                                        rows={4}
                                        style={{width:"80%",marginLeft:'25px'}}
                                    />
                                </div>
                                <div>
                                    <text className="WorkoverData-submitLeft">案例文件</text>
                                    <button className="WorkoverData-chooseFile">选择文件</button>
                                    <text>(未选择任何文件)</text>
                                    <Button className="WorkoverData-updateBtn" type="primary" shape="round">
                                        更新
                                    </Button>
                                    <Button type="primary" shape="round" onClick={this.display.bind(this)}>
                                        取消
                                    </Button>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </Fragment>

        );
    }
    componentDidMount() {
        console.log(this.props.match.params.aid)
        // 这里就是动态路由传值
    }
    display() {
        this.setState({
            show: !this.state.show
        })
    }
}
export default WorkoverData;
