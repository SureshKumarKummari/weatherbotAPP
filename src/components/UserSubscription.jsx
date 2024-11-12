// src/components/UserSubscription.js
import React, { useState } from "react";
import axios from "axios";

const UserSubscription = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [city, setCity] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/subscribe", { city });
      if (response.data.success) {
        setSubscribed(true);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  const handleUnsubscribe = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/unsubscribe", { city });
      if (response.data.success) {
        setSubscribed(false);
      }
    } catch (error) {
      console.error("Error unsubscribing:", error);
    }
  };

  return (
    <div>
      <h1>Subscribe to Daily Weather Updates</h1>
       {/* <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {subscribed ? (
        <button onClick={handleUnsubscribe}>Unsubscribe</button>
      ) : (
        <button onClick={handleSubscribe}>Subscribe</button>
      )}  */}
    </div>
  );
};

export default UserSubscription;
