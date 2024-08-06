import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, message, Select, Row, Col } from 'antd';
const { Option } = Select;

export function EditProductForm({id, setEdit}) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://colorshopapi.onrender.com/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
                form.setFieldsValue(data);
            } catch (error) {
                message.error('Failed to fetch product data');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, form]);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(`https://colorshopapi.onrender.com/api/products/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (response.status == 200) {
                message.success('Product updated successfully');
                setEdit(false);
            } else {
                message.error('Failed to update product');
            }
        } catch (error) {
            message.error('An error occurred while updating the product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }} className='w-full'>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={product}
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

                <Form.Item>
                    <Row justify="end">
                        <Col>
                            <Button 
                            className='mr-10'
                            type="primary" htmlType="submit" loading={loading}>
                                Update Product
                            </Button>
                            <Button type="primary" 
                            onClick={() => setEdit(false)} 
                            loading={loading}>
                               Close
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    );
}
