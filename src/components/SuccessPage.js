import React from "react";
import Lottie from "lottie-react";
import successAnimation from "../assets/success-animation.json"; // You need a JSON animation file

const SuccessPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0fdf4", // Light green background
      }}
    >
      <Lottie
        animationData={successAnimation}
        loop={false}
        style={{ height: 150, width: 150 }}
      />
      <h1 style={{ color: "#22c55e", marginTop: "20px" }}>Success!</h1>
      <p style={{ color: "#4ade80", textAlign: "center" }}>
        Your submission was completed successfully.
      </p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#22c55e",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => {
          // Navigate to any desired route or reload the page
          window.location.href = "/categories";
        }}
      >
        Go to Categories
      </button>
    </div>
  );
};

export default SuccessPage;
