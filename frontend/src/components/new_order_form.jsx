import React, { useState } from 'react';
import axios from 'axios';

const NewOrderForm = () => {
    const [senderCity, setSenderCity] = useState('');
    const [senderAddress, setSenderAddress] = useState('');
    const [receiverCity, setReceiverCity] = useState('');
    const [receiverAddress, setReceiverAddress] = useState('');
    const [weight, setWeight] = useState(0);
    const [pickupDate, setPickupDate] = useState(new Date().toISOString().slice(0, 10));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/Orders', {
                senderCity,
                senderAddress,
                receiverCity,
                receiverAddress,
                weight,
                pickupDate
            });
            alert(`����� ������� ������! ����� ������: ${response.data.id}`);
        } catch (error) {
            console.error(error);
            alert('��������� ������ ��� �������� ������.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="senderCity">����� �����������:</label>
                <input type="text" id="senderCity" value={senderCity} onChange={(e) => setSenderCity(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="senderAddress">����� �����������:</label>
                <input type="text" id="senderAddress" value={senderAddress} onChange={(e) => setSenderAddress(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="receiverCity">����� ����������:</label>
                <input type="text" id="receiverCity" value={receiverCity} onChange={(e) => setReceiverCity(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="receiverAddress">����� ����������:</label>
                <input type="text" id="receiverAddress" value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="weight">��� �����:</label>
                <input type="number" step="any" min="0.01" id="weight" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} required />
            </div>
            <div>
                <label htmlFor="pickupDate">���� ������ �����:</label>
                <input type="date" id="pickupDate" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
            </div>
            <button type="submit">������� �����</button>
        </form>
    );
};

export default NewOrderForm;