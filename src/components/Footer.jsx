import React from 'react';
import '../css/footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Footer() {
    return (
        <footer
            className="Footer"
            style={{
                padding: '1rem',
                backgroundColor: '#f8f8f8',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '120px',  // hauteur fixe ou minimum
                boxSizing: 'border-box',
            }}
        >
            <section>
                <a
                    className="btn btn-link btn-floating btn-lg m-1"
                    style={{ color: '#c32aa3', fontSize: '2rem' }}
                    href="https://www.instagram.com/letromaisonalacati"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    aria-label="Instagram"
                >
                    <i className="bi bi-instagram"></i>
                </a>
            </section>

            <h5 className="soustitre" style={{ margin: 0 }}>
                Lezzetli yemekler, konforlu konaklama
            </h5>
        </footer>
    );
}
