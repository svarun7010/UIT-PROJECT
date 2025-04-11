import React from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$59.99",
      image: "https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$89.99",
      image: "https://tse1.mm.bing.net/th?id=OIP.jF6u-OSZhbjL-LGtN_OJ7gHaID&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Sneakers",
      price: "$99.99",
      image: "https://tse3.mm.bing.net/th?id=OIP.Fe4qZfZ1KwwDirwGsumOeQHaG1&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div style={styles.container}>
      

      <section style={styles.hero}>
        <h2>Welcome to PropCart</h2>
        <p>Best deals on electronics, fashion, and more!</p>
      </section>

      <section style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p style={styles.price}>{product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: 0,
    margin: 0,
    backgroundColor: "#f4f4f4",
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
  hero: {
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#ddd",
  },
  products: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "40px 20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "200px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "5px",
  },
  price: {
    color: "#27ae60",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    padding: "10px",
    marginTop: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Home;
