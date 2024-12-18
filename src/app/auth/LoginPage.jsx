import React, { useState } from "react";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
  };

  return (
    <div style={styles.container}>
      {/* Left Side: Image */}
      <div style={styles.imageSection}></div>

      {/* Right Side: Form */}
      <div style={styles.formSection}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.inputField}
          />
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles object for inline styling
const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  imageSection: {
    width: "50%",
    height: "100%",
    background: "url('https://images.pexels.com/photos/845242/pexels-photo-845242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover no-repeat",
  },
  formSection: {
    width: "50%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    width: "80%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputField: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default LoginPage;
