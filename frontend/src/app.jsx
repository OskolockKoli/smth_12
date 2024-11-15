import React from 'react';
import './App.css';
import NewOrderForm from './components/new_order_form';
import OrderList from './components/order_list';

const App = () => {
    return (
        <div className="app">
            <h1>�������� ������ �� ��������</h1>
            <NewOrderForm />
            <hr />
            <h2>������ �������</h2>
            <OrderList />
        </div>
    );
};

export default App;