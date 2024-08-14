


'use client';
import React from 'react';
import Detail from '@/app/components/detail';
import { useParams } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store'; 

const Page = () => {
    const { id } = useParams(); // Extract the job ID from the URL

    return (
        <Provider store={store}>
            <div>
                <Detail id={id} />
            </div>
        </Provider>
    );
};

export default Page;
