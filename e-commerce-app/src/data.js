import Product1 from '../src/images/p1.jpg';
import Product2 from '../src/images/p2.jpg';
import Product3 from '../src/images/p3.jpg';
import Product4 from '../src/images/p4.jpg';
import Product5 from '../src/images/p5.jpg';
import Product6 from '../src/images/p6.jpg';



// moved it from the public folder into the src and used the backtick to get it to show up on product page
const data = {
    products: [
        {
            _id: '1',
            name: 'Product 1',
            category: 'New Arrivals',
            image: `${Product1}`,
            price: '200',
            brand: 'New Arrivals',
            rating: '4.0',
            numReviews: '11',
            description: 'high quality product',
        },
        {
            _id: '2',
            name: 'Product 2',
            category: 'Clearance',
            image: `${Product2}`,
            price: '20',
            brand: 'Clearance',
            rating: '3.8',
            numReviews: '12',
            description: 'great deals',
        },
        {
            _id: '3',
            name: 'Product 3',
            category: 'Limited Edition',
            image: `${Product3}`,
            price: '2000',
            brand: 'Limited Edition',
            rating: '4.8',
            numReviews: '25',
            description: 'wonderful collection',
        },
        {
            _id: '4',
            name: 'Product 4',
            category: 'Winter Arrivals',
            image: `${Product4}`,
            price: '200',
            brand: 'Winter Arrivals',
            rating: '4.0',
            numReviews: '10',
            description: 'stay cozy this year',
        },
        {
            _id: '5',
            name: 'Product 5',
            category: 'Summer Arrivals',
            image: `${Product5}`,
            price: '200',
            brand: 'Summer Arrivals',
            rating: '3.9',
            numReviews: '35',
            description: 'get your beach bod ready',
        },
        {
            _id: '6',
            name: 'Product 6',
            category: 'Office Supplies',
            image: `${Product6}`,
            price: '100',
            brand: 'Office Supplies',
            rating: '4.2',
            numReviews: '14',
            description: 'everything we need',
        },
    ],
};

export default data;