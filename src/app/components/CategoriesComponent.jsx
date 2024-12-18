import React from 'react';

// Dummy data for categories
const categoryData = [
  { id: 1, name: 'Biriyani', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Burger', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Pizza', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, name: 'Pasta', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, name: 'Sushi', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, name: 'Tacos', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 7, name: 'Salad', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 8, name: 'Steak', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 9, name: 'Sandwich', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 10, name: 'Ice Cream', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

function CategoriesComponent() {
  return (
    <div>
      <h2
        style={{
          position: 'relative',
          top: '0',
          backgroundColor: '#fff',
          zIndex: '10',
          padding: '10px 0',
          marginBottom: '0px',
          textAlign: 'center',
        }}
      >
        Categories
      </h2>
      <div
        style={{
          padding: '20px',
          maxHeight: '75vh',
          overflowY: 'auto',
          position: 'relative',
          scrollbarWidth: 'none', // Hide scrollbar for Firefox
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'center',
          }}
        >
          {categoryData.map((category) => (
            <div
              key={category.id}
              style={{
                width: '200px', // Reduced width
                height: '150px', // Reduced height
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slightly reduced elevation
                textAlign: 'center',
                backgroundColor: '#fff',
                position: 'relative',
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '12px', // Reduced font size
                  fontWeight: 'bold',
                  color: '#fff',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  padding: '3px 8px',
                  borderRadius: '3px',
                }}
              >
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesComponent;
