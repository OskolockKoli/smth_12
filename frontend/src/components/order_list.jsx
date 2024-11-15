import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/Orders');
                setOrders(response.data);
            } catch (error) {
                console.error(error);
                alert('������ ��� ��������� ������ �������.');
            }
        };
        fetchOrders();
    }, []);

    return (
        <ul>
            {orders.map((order) => (
                <li key={order.id}>
                    <p><strong>����� ������:</strong> {order.id}</p>
                    <p><strong>����� �����������:</strong> {order.senderCity}</p>
                    <p><strong>����� �����������:</strong> {order.senderAddress}</p>
                    <p><strong>����� ����������:</strong> {order.receiverCity}</p>
                    <p><strong>����� ����������:</strong> {order.receiverAddress}</p>
                    <p><strong>��� �����:</strong> {order.weight} ��</p>
                    <p><strong>���� ������ �����:</strong> {(new Date(order.pickupDate)).toLocaleDateString()}</p>
                </li>
            ))}
        </ul>
    );
};

export default OrderList;