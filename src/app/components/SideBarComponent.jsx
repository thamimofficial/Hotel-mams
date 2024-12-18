import React, { useState } from 'react';
import { FaBars, FaUtensils, FaClipboardList, FaCog, FaHome } from 'react-icons/fa';

const SideBarComponent = () => {
  const [active, setActive] = useState('Overview'); // Track the active menu item
  const [isMinimized, setIsMinimized] = useState(true); // Track sidebar size

  // Menu items for the sidebar
  const menuItems = [
    { label: 'Overview', icon: <FaHome /> },
    { label: 'Food', icon: <FaUtensils /> },
    { label: 'Orders', icon: <FaClipboardList /> },
    { label: 'Settings', icon: <FaCog /> },
  ];

  // Toggle sidebar size
  const handleHamburgerClick = () => {
    setIsMinimized(!isMinimized);
  };

  // Styles for the sidebar
  const styles = {
    sidebar: {
      height: '100vh',
      width: isMinimized ? '70px' : '200px',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      transition: 'width 0.3s ease',
    },
    header: {
      width: '100%',
      display: 'flex',
      justifyContent: isMinimized ? 'center' : 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    logo: {
      fontSize: isMinimized ? '0' : '24px',
      fontWeight: 'bold',
      color: '#333',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      transition: 'opacity 0.3s ease',
    },
    menu: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      width: '100%',
    },
    menuItem: {
      display: 'flex',
      justifyContent:isMinimized ? 'center' : '',
      alignItems: 'center',
      padding: '10px 10px',
      fontSize: '18px',
      color: '#555',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      margin: '10px',
      borderRadius: '15px',
    },
    menuItemActive: {
      backgroundColor: '#fdefd9',
      color: 'Orange',
    },
    menuIcon: {
      marginRight: isMinimized ? '0' : '10px',
      fontSize: '20px',
      transition: 'margin 0.3s ease',
    },
    menuLabel: {
      display: isMinimized ? 'none' : 'block',
      transition: 'opacity 0.3s ease',
    },
    hamburger: {
      fontSize: '24px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.sidebar}>
      {/* Header Section */}
      <div style={styles.header}>
        {/* <div style={styles.logo}>
          {!isMinimized && <h2>Logo</h2>}
        </div> */}
        <FaBars style={styles.hamburger} onClick={handleHamburgerClick} />
      </div>

      {/* Menu Section */}
      <ul style={styles.menu}>
        {menuItems.map((item) => (
          <li
            key={item.label}
            style={{
              ...styles.menuItem,
              ...(active === item.label ? styles.menuItemActive : {}),
            }}
            onClick={() => setActive(item.label)} // Update active state on click
          >
            <span style={styles.menuIcon}>{item.icon}</span>
            <span style={styles.menuLabel}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarComponent;
