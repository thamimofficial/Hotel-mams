import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FoodCardComponent from '../components/FoodCardComponent';
import CheckOutComponent from '../components/CheckOutComponent';
import SideBarComponent from '../components/SideBarComponent';
import HeadingCardComponent from '../components/HeadingCardComponent';

// Example data array for Food Cards
const FoodCardData = [
  { id: 1, food_image: 'https://images.pexels.com/photos/17649369/pexels-photo-17649369/free-photo-of-meat-with-rice.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'Biriyani', food_price: 1120 },
  { id: 2, food_image: 'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'Pizza', food_price: 850 },
  { id: 3, food_image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'Burger', food_price: 250 },
  { id: 4, food_image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'Pasta', food_price: 600 },
  { id: 5, food_image: 'https://images.pexels.com/photos/29692598/pexels-photo-29692598/free-photo-of-delicious-salmon-spread-with-toast-and-greens.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'Sushi', food_price: 1500 },
  { id: 6, food_image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'chicken', food_price: 250 },
  { id: 7, food_image: 'https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'sandwich', food_price: 600 },
  { id: 8, food_image: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600', food_name: 'veg role', food_price: 1500 },
];

function Home() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Load stored order data on mount
    const loadData = async () => {
      const storedData = await AsyncStorage.getItem('order_data');
      if (storedData) {
        setOrderData(JSON.parse(storedData));
      }
    };
    loadData();
  }, []);

  const handleCardClick = async (food) => {
    const existingItem = orderData.find((item) => item.id === food.id);

    let updatedOrderData;
    if (existingItem) {
      // Update quantity and total price if the item already exists
      updatedOrderData = orderData.map((item) =>
        item.id === food.id
          ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + food.food_price }
          : item
      );
    } else {
      // Add new item with quantity and totalPrice
      updatedOrderData = [...orderData, { ...food, quantity: 1, totalPrice: food.food_price }];
    }

    setOrderData(updatedOrderData);
    await AsyncStorage.setItem('order_data', JSON.stringify(updatedOrderData));
    console.log('Updated Order Data:', updatedOrderData);
  };

  const handleDeleteItem = async (id) => {
    const updatedOrderData = orderData.filter((item) => item.id !== id);
    setOrderData(updatedOrderData);
    await AsyncStorage.setItem('order_data', JSON.stringify(updatedOrderData));
    console.log('Updated Order Data After Deletion:', updatedOrderData);
  };

  const increaseQuantity = async (id) => {
    const updatedOrderData = orderData.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.food_price }
        : item
    );
    setOrderData(updatedOrderData);
    await AsyncStorage.setItem('order_data', JSON.stringify(updatedOrderData));
  };

  const decreaseQuantity = async (id) => {
    const updatedOrderData = orderData.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.food_price }
        : item
    );
    setOrderData(updatedOrderData);
    await AsyncStorage.setItem('order_data', JSON.stringify(updatedOrderData));
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ overflowY: 'auto', borderRight: '1px solid #ccc' }}>
        <SideBarComponent />
      </div>

      <div style={{ flex: 7, padding: '20px', overflowY: 'auto' }}>
        <h1 style={{ fontSize: '20px' }}>Let's do your best today 🚀</h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '20px',
            gap: '20px',
          }}
        >
          <HeadingCardComponent icon="📦" title="Order Status" itemCount="10" />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            maxHeight: '75vh',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          }}
        >
          {FoodCardData.map((food) => (
            <FoodCardComponent
              key={food.id}
              food={food}
              onClick={handleCardClick}
              onDelete={handleDeleteItem}
              isSelected={!!orderData.find((item) => item.id === food.id)}
              quantity={orderData}
            />
          ))}
        </div>
      </div>

      <div style={{ flex: 2.8, height: '100%', borderLeft: '1px solid #ccc' }}>
        <CheckOutComponent
          checkData={orderData}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onDelete={handleDeleteItem}
          
        />
      </div>
    </div>
  );
}

export default Home;
