import React from 'react'
import { categories } from '../data/data'
import Footer from './Footer'

export default function CategoryItem() {
    const handleClick = (id) => {
        const section = document.getElementById(id)
        if (section) section.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div style={styles.menu}>

            </div>

        </>
    )
}

const styles = {
    menu: {
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        padding: '10px',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #eee'
    },
    button: {
        padding: '8px 15px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '15px',
        cursor: 'pointer',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s ease'
    }
};