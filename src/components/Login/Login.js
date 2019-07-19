import React, { Component,Fragment } from "react";
import { Form, Icon, Input, Button, Checkbox, Select  } from 'antd';
import '../../../css/Login.css'

class Login extends Component {



    render() {
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select;
        return (
            <div className="head">

            <Form  onSubmit={this.handleSubmit}
                   className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入你的用户名' }],
                    })(
                        <Input
                            prefix={<Icon type="user"
                                          style={{ color: 'rgba(0,0,0,.25)' }}
                                    />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入你的密码' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}

                    <Select defaultValue="用户"
                            style={{marginLeft:'55px', width: 120 }}
                            onChange={this.handleChange.bind(this)}
                    >
                        <Option value="user">用户</Option>
                        <Option value="manger">管理员</Option>
                    </Select>

                    <Button type="primary"
                            htmlType="submit"
                            className="login-form-button">
                        登录
                    </Button>

                </Form.Item>
            </Form>
            </div>
        );
    }
    /* 下拉列表选择函数 */
    handleChange(value) {
        console.log(`selected ${value}`);
    }

    /* 提交按钮的单击响应函数 */
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

}
export default Form.create()(Login);
