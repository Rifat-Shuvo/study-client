import React, { useEffect, useState } from 'react';
import Banner from './Banner';

const Home = () => {

    const [data, setData] = useState([])
    const [faq, setFaq] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    useEffect(()=>{
        fetch('/faq.json')
        .then(res=>res.json())
        .then(data=>setFaq(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h1 className='m-5 p-5 text-5xl font-bold text-center text-rose-600'> Our Features</h1>

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5 p-5'>
                {
                    data.map(item => <div key={item.id}>
                        <div className="card bg-rose-100 text-gray-600 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p className='h-24'>{item.description}</p>

                            </div>
                        </div>
                    </div>)
                }
            </div>

            <h1 className='m-5 p-5 text-5xl font-bold text-center text-rose-600'>Frequently Asked Questions (FAQ)</h1>

            {
                faq.map(item=><div key={item.id} className="collapse collapse-arrow bg-rose-100 mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    {item.question}
                </div>
                <div className="collapse-content">
                    <p>{item.answer}</p>
                </div>
            </div>)
            }

        </div>
    );
};

export default Home;