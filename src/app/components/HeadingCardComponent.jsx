import React from 'react';

const HeadingCardComponent = ({ icon, title, itemCount }) => {
  const styles = {
    card: {
      width: '150px',
      height: 'auto',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      cursor: 'pointer',
      border: `2px solid orange`,
      padding:'10px'
    },
    icon: {
      fontSize: '24px',
      color: '#555',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    title: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      margin:'0px'
    },
    itemCount: {
      fontSize: '12px',
      color: '#777',
      margin:'0px'

    },
  };

  return (
    <div style={styles.card}>
      {/* Icon Section */}
      <div style={styles.icon}>{icon}</div>

      {/* Title and Item Count Section */}
      <div style={styles.titleContainer}>
        <p style={styles.title}>{title}</p>
        <p style={styles.itemCount}>{itemCount} Items</p>
      </div>
    </div>
  );
};

export default HeadingCardComponent;
