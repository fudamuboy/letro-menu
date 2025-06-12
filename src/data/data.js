// data/data.js
const categories = [
    {
        id: 'kahvalti',
        name: 'Kahvaltı',
        image: '/images/kahvalti.jpg'
    },
    {
        id: 'atistirmalik',
        name: 'Atıştırmalık',
        image: '/images/atistirmak.jpg'
    },
    {
        id: 'izgara',
        name: 'Izgara Lezzetleri',
        image: '/images/izgara.jpg'
    },
    {
        id: 'Makarnalar',
        name: 'Makarnalar',
        image: '/images/makarna.jpg'
    },
    {
        id: 'Sicak Icecek',
        name: 'Sicak Icecek',
        image: '/images/sicakicecekler.webp'
    },
    {
        id: 'Soguk Icecek',
        name: 'Soguk Icecek',
        image: '/images/sogukicecek.jpg'
    },
    {
        id: 'Turk Kahveleri',
        name: 'Turk Kahveleri',
        image: '/images/turkkaveler.jpg'
    },
    {
        id: 'Expresso Bazi Kahveler',
        name: 'Expresso Bazi Kahveler',
        image: '/images/espressobazli-kahveler.webp'
    },
    {
        id: 'izgara',
        name: 'Izgara Lezzetleri',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lezzet.com.tr%2Flezzetten-haberler%2Falkolsuz-kokteyl-tarifleri&psig=AOvVaw0rtBITiqHxL1-YVowkEpP9&ust=1749720943928000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCgpc-I6Y0DFQAAAAAdAAAAABAE'
    },

];

const products = [
    // Kahvaltı
    {
        id: 1,
        name: 'Sucuklu Yumurta',
        price: 50,
        category: 'kahvalti',
        image: '/images/sucukluyumurta.jpg'
    },
    {
        id: 2,
        name: 'Menemen',
        price: 45,
        category: 'kahvalti',
        image: '/images/menemen.jpg'
    },
    {
        id: 3,
        name: 'Patates Kizartmasi',
        price: 40,
        category: 'kahvalti',
        image: '/images/pkizartmasi.jpg'
    },
    {
        id: 4,
        name: 'Kuymak',
        price: 35,
        category: 'kahvalti',
        image: '/images/kuymak.jpg'
    },
    {
        id: 5,
        name: 'Peynirli Omlet',
        price: 15,
        category: 'kahvalti',
        image: '/images/peynirliomlet.jpg'
    },

    // Atıştırmalık
    {
        id: 6,
        name: 'Sigara Böreği',
        price: 35,
        category: 'atistirmalik',
        image: '/images/boregi.jpg'
    },
    {
        id: 7,
        name: 'Çıtır Tavuk',
        price: 65,
        category: 'atistirmalik',
        image: '/images/citirtavuk.jpg'
    },
    {
        id: 8,
        name: 'Patates Kızartması',
        price: 25,
        category: 'atistirmalik',
        image: '/images/pkizartmasi.jpg'
    },
    {
        id: 9,
        name: 'Soğan Halkası',
        price: 30,
        category: 'atistirmalik',
        image: '/images/soganhalkasi.jpg'
    },

    // Izgara Lezzetleri
    {
        id: 10,
        name: 'Karışık Izgara',
        price: 120,
        category: 'izgara',
        image: '/images/karisik-izgara.jpg'
    },
    {
        id: 11,
        name: 'Adana Kebap',
        price: 85,
        category: 'izgara',
        image: '/images/adana-kebap.jpg'
    },
    {
        id: 12,
        name: 'Tavuk Şiş',
        price: 75,
        category: 'izgara',
        image: '/images/tavuk-sis.jpg'
    },
    {
        id: 13,
        name: 'Köfte',
        price: 65,
        category: 'izgara',
        image: '/images/kofte.jpg'
    },
    {
        id: 14,
        name: 'Balık Izgara',
        price: 90,
        category: 'izgara',
        image: '/images/balik-izgara.jpg'
    },

    // Sicak İçecekler
    {
        id: 15,
        name: 'Çay',
        price: 8,
        category: 'Sicak Icecek',
        image: '/images/cay.jpg'
    },
    {
        id: 16,
        name: 'Süt',
        price: 25,
        category: 'Sicak Icecek',
        image: '/images/turk-kahvesi.jpg'
    },
    {
        id: 17,
        name: 'Sıcak Çikolata',
        price: 15,
        category: 'Sicak Icecek',
        image: '/images/ayran.jpg'
    },
    {
        id: 18,
        name: 'Fincan Çay',
        price: 35,
        category: 'Sicak Icecek',
        image: '/images/kartal.png'
    },
    // Soguk Icecek 
    {
        id: 19,
        name: 'Kola',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kartal.png'
    },
    {
        id: 20,
        name: 'Gazoz',
        price: 5,
        category: 'Soguk Icecek',
        image: '/images/kartal.png'
    },
    {
        id: 19,
        name: 'RedBull',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kartal.png'
    },
    {
        id: 19,
        name: 'Ayran',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'Soda (Meyveli)',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'Soda (Sade)',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'Portakal',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'Portakal Suyu',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'Su',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'IceTea',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'Meyve Suyu (Kutu)',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
    {
        id: 19,
        name: 'Churcill',
        price: 20,
        category: 'Soguk Icecek',
        image: '/images/kola.jpg'
    },
];
export { categories, products };