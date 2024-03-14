import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const { tranId } = useParams()
    return (
        <div>
            <h1 className='text-xl text-primary'>Payment Successfull</h1>
            <h1 className='text-xl text-primary'>Your Tranjection Id - {tranId}</h1>
        </div>
    );
};

export default PaymentSuccess;