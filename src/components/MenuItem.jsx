// MenuItem.jsx
import React from 'react';

const MenuItem = ({ item }) => {
    return (
        <div className="col-12 col-md-6 d-flex">
            <div style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#f8f9fa',
                padding: '12px',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                gap: '15px'
            }}>


                <img
                    src={item.image}
                    alt={item.name}
                    style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                />

                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h6 style={{
                        margin: 0,
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#333'
                    }}>
                        {item.name}
                    </h6>
                    <span style={{
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        color: '#ff6b35',
                        whiteSpace: 'nowrap'
                    }}>
                        {item.price}₺
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
