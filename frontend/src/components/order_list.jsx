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
                alert('Ошибка при получении списка заказов.');
            }
        };
        fetchOrders();
    }, []);

    return (
        <ul>
            {orders.map((order) => (
                <li key={order.id}>
                    <p><strong>Номер заказа:</strong> {order.id}</p>
                    <p><strong>Город отправителя:</strong> {order.senderCity}</p>
                    <p><strong>Адрес отправителя:</strong> {order.senderAddress}</p>
                    <p><strong>Город получателя:</strong> {order.receiverCity}</p>
                    <p><strong>Адрес получателя:</strong> {order.receiverAddress}</p>
                    <p><strong>Вес груза:</strong> {order.weight} кг</p>
                    <p><strong>Дата забора груза:</strong> {(new Date(order.pickupDate)).toLocaleDateString()}</p>
                </li>
            ))}
        </ul>
    );
};

export default OrderList;