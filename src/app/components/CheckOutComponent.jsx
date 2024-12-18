import React, { useState, useEffect } from 'react';
import storeLogo from '../assests/bitepos.png'; // Adjust the path as per your project structure

function CheckOutComponent({ checkData = [], onIncrease, onDecrease , onDelete}) {
  const [products, setProducts] = useState(checkData);
  const [diningOption, setDiningOption] = useState(null); // Dine-in or Takeaway

  // Sync products with the passed checkData
  useEffect(() => {
    setProducts(checkData);
  }, [checkData]);

  const calculateSubtotal = () =>
    products.reduce((sum, product) => sum + product.totalPrice * product.quantity, 0);

  // const handleDelete = (id) => {
  //   const updatedProducts = products.filter(product => product.id !== id);
  //   setProducts(updatedProducts);
  //   if (onUpdate) onUpdate(updatedProducts);
  // };

  const printReceipt = () => {
    const subtotal = calculateSubtotal();
    const serviceCharge = Math.ceil(subtotal * 0); // 10% service charge
    const total = subtotal + serviceCharge;

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
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: left; font-size: 10px;">Item</th>
              <th style="text-align: right; font-size: 10px;">Price</th>
              <th style="text-align: right; font-size: 10px;">Qty</th>
              <th style="text-align: right; font-size: 10px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${products.map(product => `
              <tr>
                <td style="padding: 3px 0; font-size: 10px;">${product.food_name}</td>
                <td style="text-align: right; font-size: 10px;">₹${product.totalPrice}</td>
                <td style="text-align: right; font-size: 10px;">${product.quantity}</td>
                <td style="text-align: right; font-size: 10px;">₹${product.totalPrice * product.quantity}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <hr />
        <p><strong>Subtotal:</strong> ₹${subtotal} </p>
        <p><strong>Service Charge:</strong> ₹${serviceCharge}</p>
        <p><strong>Total:</strong> ₹${total}</p>
      </div>
    `);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  const styles = useStyles();
  const subtotal = calculateSubtotal();
  const serviceCharge = Math.ceil(subtotal * 0);
  const total = subtotal + serviceCharge;

  return (
    <div style={styles.container}>
      <div style={styles.customerSection}>
        <p style={styles.customerId}>
          Customer ID: <span style={styles.customerIdValue}>12345</span>
        </p>
        <hr style={styles.divider} />
        <h4 style={styles.heading}>Where will you eat:</h4>
        <div style={styles.diningButtons}>
          <button
            onClick={() => setDiningOption('takeaway')}
            style={{
              ...styles.button,
              ...(diningOption === 'takeaway' ? styles.activeButton : styles.inactiveButton),
            }}
          >
            Take it away
          </button>
          <button
            onClick={() => setDiningOption('dinein')}
            style={{
              ...styles.button,
              ...(diningOption === 'dinein' ? styles.activeButton : styles.inactiveButton),
            }}
          >
            Dine in
          </button>
        </div>
        <hr style={styles.divider} />
        <div style={styles.products}>
          {products.map(product => (
            <div key={product.id} style={styles.productRow}>
              <img src={product.food_image} alt={product.food_name} style={styles.productImage} />
              <div style={styles.productDetails}>
                <h4 style={styles.productName}>{product.food_name}</h4>
                <div style={styles.quantitySection}>
                  <button onClick={() => onDecrease(product.id)} style={styles.quantityButton}>-</button>
                  <span style={styles.quantity}>{product.quantity}</span>
                  <button onClick={() => onIncrease(product.id)} style={styles.quantityButton}>+</button>
                </div>
              </div>
              <div>
                <p style={styles.productPrice}>₹{product.totalPrice}</p>
                <button onClick={() => onDelete(product.id)} style={styles.deleteButton}>X</button>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.summary}>
          <p>Subtotal: ₹{subtotal}</p>
          <p>Service Charge (10%): ₹{serviceCharge}</p>
          <p>Total: ₹{total}</p>
        </div>
        <button onClick={printReceipt} style={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
}

function useStyles() {
  return {
    container: { maxHeight: '70vh', padding: '15px' },
    customerSection: { flex: '1' },
    customerId: { fontSize: '16px', fontWeight: 'bold' },
    customerIdValue: { fontWeight: 'normal' },
    divider: { margin: '10px 0', borderTop: '1px solid #ccc' },
    heading: { fontSize: '14px' },
    diningButtons: { display: 'flex', justifyContent: 'space-around', marginBottom: '15px' },
    button: { padding: '10px 20px', fontSize: '14px', borderRadius: '8px', cursor: 'pointer' },
    activeButton: { backgroundColor: '#fff', color: '#ffa500', border: '2px solid #ffa500' },
    inactiveButton: { backgroundColor: '#fff', color: '#000', border: '2px solid silver' },
    products: { overflowY: 'auto', maxHeight: '40vh', minHeight: '40vh', scrollbarWidth: 'none' },
    productRow: { display: 'flex', alignItems: 'center', marginBottom: '5px', border: '1px solid #ddd', borderRadius: '10px', padding: '10px' },
    productImage: { width: '90px', marginRight: '15px', borderRadius: '10px' },
    productDetails: { flex: 1 },
    productName: { fontSize: '15px', padding: 0, margin: 0 },
    productPrice: { fontSize: '13px' },
    quantitySection: { display: 'flex', alignItems: 'center' },
    quantityButton: { backgroundColor: '#fff', border: '1px solid silver', borderRadius: '8px', cursor: 'pointer', fontWeight: '900', fontSize: '14px' },
    quantity: { fontSize: '14px', margin: '0px 5px', color: '#ffa500', fontWeight: 'bold' },
    deleteButton: { marginLeft: '10px', backgroundColor: 'red', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '8px', cursor: 'pointer' },
    summary: { border: '1px solid silver', padding: 10, borderRadius: '10px', margin: '10px' },
    checkoutButton: { padding: '15px', backgroundColor: '#ffa500', color: '#fff', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', width: '100%' },
  };
}

export default CheckOutComponent;
