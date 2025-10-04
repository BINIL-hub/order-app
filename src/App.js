
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  function placeOrder() {
    setMessage("✅ Order Placed Successfully!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Azure React App</h1>
      <button 
        onClick={placeOrder} 
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Place Order
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}

export default App;
