import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './LoginForm.less';

export const LoginForm = (props) => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='loginFormContainer'>
            <div className='background'></div>
            <div className='closeButton' onClick={() => props.close(false)}><CloseOutlined /></div>
            <Form
                name="normal_login"
                className="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password ?
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
