import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Table, Button, Space, Input, message } from 'antd';
import { EditProductForm } from './Edit';
import { SearchOutlined } from '@ant-design/icons';

export function ProductsAdmin() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [productId, setProductId] = useState(null);
    const loaderData = useLoaderData();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setProducts(loaderData);
        setFilteredProducts(loaderData);
    }, [loaderData]);

    useEffect(() => {
        fetch('https://colorshopapi.onrender.com/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, [edit]);

    const handleEdit = (id) => {
        setEdit(!edit);
        setProductId(id);
    };

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`https://colorshopapi.onrender.com/api/products/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setProducts(products.filter(product => product.id !== id));
                setFilteredProducts(filteredProducts.filter(product => product.id !== id));
                message.success('Product deleted successfully');
            } else {
                message.error('Failed to delete product');
            }
        } catch (error) {
            message.error('An error occurred while deleting the product');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (value) => {

        if (value) {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    };

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="Product" style={{ width: 100, height: 100 }} />,
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <div style={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</div>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => handleEdit(record.id)} type="primary">
                        Edit
                    </Button>
                    <Button onClick={() => handleDelete(record.id)} type="danger" loading={loading}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col items-center justify-center w-full'>
                <div style={{ marginBottom: 16, width: '100%', maxWidth: 600, margin: "50px" }}>
                    <Input
                        placeholder="Search products..."
                        onChange={(e) => handleSearch(e.target.value)}
                        prefix={<SearchOutlined />}
                    />
                </div>
                <Table
                    columns={columns}
                    dataSource={filteredProducts}
                    rowKey="_id"
                    pagination={{ pageSize: 5 }}
                />
                {
                    edit && <EditProductForm id={productId} setEdit={setEdit} />
                }
            </div>
        </div>
    );
}
