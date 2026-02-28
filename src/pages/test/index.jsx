"use client";

export default function PayPage() {
  const upiLink =
    "upi://pay?pa=s.rajarathinam1999-1@okaxis&pn=Raja&am=1000&cu=INR&tn=Test%20Payment";

  const handlePay = () => {
    window.location.href = upiLink;
  };

  return (
    <div style={styles.container}>
      <button onClick={handlePay} style={styles.button}>
        Pay ₹1000 via UPI
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
