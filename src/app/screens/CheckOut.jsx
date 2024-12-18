import React, { useState } from 'react';
import FoodCards from './FoodCards';  // Import the FoodCards component
import storeLogo from '../assests/bitepos.png';  // Import your store logo image from the assets folder

const productData = [
  { id: 1, product_image: 'https://via.placeholder.com/100', product_name: 'Biriyani', product_price: 1120, quantity: 1 },
  { id: 2, product_image: 'https://via.placeholder.com/100', product_name: 'Pizza', product_price: 850, quantity: 1 },
  { id: 3, product_image: 'https://via.placeholder.com/100', product_name: 'Burger', product_price: 250, quantity: 1 },
  { id: 4, product_image: 'https://via.placeholder.com/100', product_name: 'Pasta', product_price: 600, quantity: 1 },
  { id: 5, product_image: 'https://via.placeholder.com/100', product_name: 'Sushi', product_price: 1500, quantity: 1 },
];

function CheckOut() {
  const [products, setProducts] = useState(productData);

  const handleIncrease = (id) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
  };

  const handleDecrease = (id) => {
    setProducts(products.map(product => product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product));
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const printReceipt = () => {
    const printWindow = window.open('', '', 'height=400,width=800');
    
    printWindow.document.write('<html><head><title>Receipt</title></head><body>');
    printWindow.document.write(`
      <div style="width: 72mm; padding: 5mm; font-family: Arial, sans-serif; font-size: 10px;">
        <h3 style="text-align: center; font-size: 12px; margin-bottom: 5px;">Store Receipt</h3>
        <div style="text-align: center;">
          <img src="${storeLogo}" alt="Store Logo" style="width: 60px; height: 60px; margin-bottom: 2px;" />
          <p style="font-size: 10px; margin-bottom: 2px;">Store Address: 123 Main Street, City, Country</p>
        </div>
        <hr style="border: 0; border-top: 1px dashed #000; margin: 5px 0;">

        <div style="margin-top: 10px;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="text-align: left; padding-bottom: 3px; font-size: 10px;">Item</th>
                <th style="text-align: right; padding-bottom: 3px; font-size: 10px;">Price</th>
                <th style="text-align: right; padding-bottom: 3px; font-size: 10px;">Qty</th>
                <th style="text-align: right; padding-bottom: 3px; font-size: 10px;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${products.map(product => `
                <tr>
                  <td style="padding: 3px 0; font-size: 10px;">${product.product_name}</td>
                  <td style="text-align: right; padding: 3px 0; font-size: 10px;">${product.product_price} INR</td>
                  <td style="text-align: right; padding: 3px 0; font-size: 10px;">${product.quantity}</td>
                  <td style="text-align: right; padding: 3px 0; font-size: 10px;">${product.product_price * product.quantity} INR</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <hr style="border: 0; border-top: 1px dashed #000; margin: 5px 0;">
          <div style="margin-top: 5px;">
            <p><strong>Total: </strong><span style="font-size: 10px;">${products.reduce((sum, product) => sum + (product.product_price * product.quantity), 0)} INR</span></p>
          </div>
        </div>
        <hr style="border: 0; border-top: 1px dashed #000; margin: 5px 0;">
      </div>
    `);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
      {/* FoodCards section - 70% */}
      <div style={{ flex: '7', padding: '20px', borderRight: '1px solid #ccc' }}>
        <FoodCards />
      </div>

      {/* CheckOut section - 30% */}
      <div style={{ flex: '3', padding: '15px' }}>
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '10px', overflowY: 'auto', maxHeight: '70vh' }}>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={storeLogo} alt="Store Logo" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <h2 style={{ margin: '5px 0' }}>Thamim's Store</h2>
            <p style={{ margin: '0' }}>Pudumadam, Ramanathapuran - 623524</p>
          </div>

          {/* Scrollable product list */}
          <div style={{ paddingRight: '10px', maxHeight: '50vh', overflowY: 'auto' }}>
            {products.map(product => (
              <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                <img src={product.product_image} alt={product.product_name} style={{ width: '50px', marginRight: '15px' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{fontSize:15}}>{product.product_name}</h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => handleDecrease(product.id)} style={{ marginRight: '5px' }}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncrease(product.id)} style={{ marginLeft: '5px' }}>+</button>
                </div>
                <button onClick={() => handleDelete(product.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px' }}>Delete</button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button onClick={printReceipt} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '14px' }}>Print</button>
            <button style={{ padding: '10px 20px', fontSize: '14px' }}>Hold Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
