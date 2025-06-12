import React from 'react'
import Header from './Header'
import { categories, products } from './data/data';
import CategoryItem from './components/CategoryItem';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ flex: 1 }}>
        <Header />
        <CategoryItem />
        <div style={{ padding: '10px' }}>
          {categories.map((category) => {
            const items = products.filter(p => p.category === category.id);
            return (
              <MenuSection
                key={category.id}
                category={category}
                items={items}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
