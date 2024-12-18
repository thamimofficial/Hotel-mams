import React from 'react';

function FoodCardComponent({ food, onClick, onDelete, isSelected, quantity }) {
  // Find the quantity of the current food item in the order data
  const foodQuantity = quantity.find((item) => item.id === food.id)?.quantity || 0;

  return (
    <div
      onClick={() => onClick(food)}
      style={{
        width: '135px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        overflowY: 'hidden',
        maxHeight: '220px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#d3f9d8' : '#fff', // Highlight selected card
        position: 'relative',
      }}
    >
      {isSelected && (
        <>
          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(food.id);
            }}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
            }}
          >
            ✕
          </button>

          {/* Quantity Badge */}
          {foodQuantity > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '5px',
                left: '5px',
                backgroundColor: '#4caf50',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              {foodQuantity}
            </div>
          )}
        </>
      )}

      {/* Food Image */}
      <img
        src={food.food_image}
        alt={food.food_name}
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      />
      <h3 style={{ fontSize: '14px', margin: '8px 0' }}>{food.food_name}</h3>
      <p style={{ fontSize: '12px', color: '#555', margin: '4px 0' }}>₹{food.food_price}</p>
    </div>
  );
}

export default FoodCardComponent;
