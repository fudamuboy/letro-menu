import React, { useState } from 'react';
import { HiChevronDown } from "react-icons/hi2";
import MenuItem from './MenuItem';

const MenuSection = ({ category, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const accordionStyle = {
        backgroundImage: `url("${category.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.4)',
        color: 'white',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        height: '220px',
        border: 'none',
        borderRadius: '12px',
        textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto 10px auto',
        textAlign: 'left',
        padding: '20px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        cursor: 'pointer'
    };

    return (
        <div className="accordion mb-3" id={`accordion-${category.id}`}>
            <div
                className="accordion-item"
                style={{
                    border: 'none',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}
            >
                <h2 className="accordion-header" id={`heading-${category.id}`}>
                    <button
                        className="accordion-button"
                        style={accordionStyle}
                        type="button"
                        onClick={toggleAccordion}
                        aria-expanded={isOpen}
                        aria-controls={`collapse-${category.id}`}
                    >
                        <span>{category.name}</span>
                        <HiChevronDown
                            style={{
                                fontSize: '2rem',
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                position: 'absolute',
                                bottom: '15px',
                                right: '20px',
                                backgroundColor: 'rgba(255,255,255,0.25)',
                                borderRadius: '50%',
                                padding: '6px',
                                color: 'white'
                            }}
                        />
                    </button>
                </h2>

                {isOpen && (
                    <div
                        className="accordion-body mt-3 mb-2"
                        style={{
                            backgroundColor: 'white',
                            padding: '0 15px 15px 15px',
                            borderRadius: '0 0 12px 12px'
                        }}
                    >
                        <div className="row g-3">
                            {items && items.map((item) => (
                                <MenuItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuSection;
