import React from 'react';
import './Clients.css'

const clients=[
    {
        logo:'https://i.ibb.co/8rRXsDD/dbe37a3f135941b9a322379aa0bdf34b.png'
    },
    {
        logo:'https://i.ibb.co/xsJz4R1/c51fe47a87374631bc30a1be5416b984.png'
    },
    {
        logo:'https://i.ibb.co/mv2J3RD/7b466cd9359941c78d6407b2612f5c98.png'
    },
    {
        logo:'https://i.ibb.co/JqP2hzN/2321e0a1e7794e5da69b8d2f4a16f86c.png'
    },
    {
        logo:'https://i.ibb.co/3mxfwwt/711cb7377db345fbb41c4c0e916bfbe0.png'
    },
    {
        logo:'https://i.ibb.co/NS8Mjzs/902b2a4374824c21a40a597dae62dc15.png'
    },
]

const Clients = () => {
    return (
        <div className='clients-main my-5 py-5'>
            <div className='row w-100 mx-0 text-center'>
                {
                    clients.map(client=><div className='col-md-4'><div className='m-3'><img src={client.logo} alt=""/></div></div>)
                }
            </div>
        </div>
    );
};

export default Clients;