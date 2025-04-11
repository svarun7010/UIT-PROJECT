import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      

      <section style={styles.banner}>
        <h2 style={styles.bannerTitle}>About Us</h2>
      </section>

      <section style={styles.content}>
        <h3>Who We Are</h3>
        <p>
          At <strong>MyShop</strong>, we’re passionate about bringing you the best deals on
          electronics, fashion, home goods, and more. Our journey began with a simple idea:
          make online shopping easy, affordable, and trustworthy.
        </p>

        <h3>Our Mission</h3>
        <p>
          We aim to provide high-quality products at unbeatable prices, backed by excellent
          customer service and fast, reliable shipping.
        </p>

        <h3>Why Choose Us?</h3>
        <ul style={styles.list}>
          <li>🚚 Free & Fast Delivery</li>
          <li>🔒 Secure Payments</li>
          <li>⭐ Top-Rated Customer Support</li>
          <li>🛍️ Huge Selection of Products</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Times new roman'",
    backgroundColor: "#fefefe",
    color: "#333",
  },
  header: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  banner: {
    backgroundColor: "#f0f0f0",
    padding: "60px 20px",
    textAlign: "center",
  },
  bannerTitle: {
    fontSize: "2.5rem",
    margin: 0,
  },
  content: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "0 20px",
    lineHeight: "1.7",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    marginTop: "60px",
  },
};

export default AboutUs;
