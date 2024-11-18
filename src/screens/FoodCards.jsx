import React from 'react';

// Example data array for Food Cards
const FoodCardData = [
  { id: 1, food_image: 'https://via.placeholder.com/150', food_name: 'Biriyani', food_price: '1120 INR' },
  { id: 2, food_image: 'https://via.placeholder.com/150', food_name: 'Pizza', food_price: '850 INR' },
  { id: 3, food_image: 'https://via.placeholder.com/150', food_name: 'Burger', food_price: '250 INR' },
  { id: 4, food_image: 'https://via.placeholder.com/150', food_name: 'Pasta', food_price: '600 INR' },
  { id: 5, food_image: 'https://via.placeholder.com/150', food_name: 'Sushi', food_price: '1500 INR' },
  { id: 6, food_image: 'https://via.placeholder.com/150', food_name: 'Tacos', food_price: '400 INR' },
  { id: 7, food_image: 'https://via.placeholder.com/150', food_name: 'Salad', food_price: '300 INR' },
  { id: 8, food_image: 'https://via.placeholder.com/150', food_name: 'Steak', food_price: '1800 INR' },
  { id: 9, food_image: 'https://via.placeholder.com/150', food_name: 'Sandwich', food_price: '200 INR' },
  { id: 10, food_image: 'https://via.placeholder.com/150', food_name: 'Ice Cream', food_price: '150 INR' },
];

function FoodCards() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      overflowY: 'auto',
      height: '100%', // Adjust height to fit within desired space
      padding: '10px',
      scrollbarWidth: 'none', // Firefox
      WebkitOverflowScrolling: 'touch', // Smooth scrolling for iOS
    }}>
      {FoodCardData.map((food) => (
        <div key={food.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '10px',
          width: '200px',
          textAlign: 'center',
        }}>
          <img src={food.food_image} alt={food.food_name} style={{
            width: '100%',
            borderRadius: '8px',
          }} />
          <h3>{food.food_name}</h3>
          <p>Price: {food.food_price}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodCards;
