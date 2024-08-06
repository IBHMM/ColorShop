import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, message, Select, Row, Col } from 'antd';
import { useNavigate } from 'react-router';

const { Option } = Select;

export function AddProductForm() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await fetch('https://colorshopapi.onrender.com/api/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({...values, id: Date.now().toString() }),
            });

            if (response.ok) {
                message.success('Product added successfully');
                form.resetFields(); 
            } else {
                message.error('Failed to add product');
            }
        } catch (error) {
            message.error('An error occurred while adding the product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                style={{ maxWidth: '600px', margin: 'auto' }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please input the product title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Price"
                    rules={[{ required: true, message: 'Please input the product price!' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="category"
                    label="Category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                >
                    <Select placeholder="Select a category">
                        <Option value="electronics">Electronics</Option>
                        <Option value="furniture">Furniture</Option>
                        <Option value="clothing">Clothing</Option>
                        <Option value="accessories">Accessories</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Image URL"
                    rules={[{ required: true, message: 'Please input the product image URL!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Row justify="end">
                        <Col>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Add Product
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    );
}
