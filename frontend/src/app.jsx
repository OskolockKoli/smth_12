import React from 'react';
import './App.css';
import NewOrderForm from './components/new_order_form';
import OrderList from './components/order_list';

const App = () => {
    return (
        <div className="app">
            <h1>Создание заказа на доставку</h1>
            <NewOrderForm />
            <hr />
            <h2>Список заказов</h2>
            <OrderList />
        </div>
    );
};

export default App;