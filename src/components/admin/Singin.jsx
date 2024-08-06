import { useEffect } from 'react';
import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useLoaderData, useNavigate } from 'react-router';

export function SignIn() {
    const [loading, setLoading] = useState(false);
    const loaderd = useLoaderData();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch('https://colorshopapi.onrender.com/api/users/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            console.log('Response:', response);

            if (response.ok) {
                message.success('Login successful');
                localStorage.setItem('admin', JSON.stringify(values));
                navigate('/admin')
            } else {
                message.error('Login failed');
            }
        } catch (error) {
            message.error('An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loaderd) {
            navigate('/admin')
        }
    }, [loaderd]);

    return (
        <div className='flex items-center justify-center min-h-screen bg-red-600'>
            <div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-red-600'>Admin Sign In</h2>
                <Form
                    name="signin"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="email"
                        label="email"
                        rules={[{ required: true, message: 'Please enter your username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading} className='bg-red-600 border-red-600 hover:bg-red-700'>
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
