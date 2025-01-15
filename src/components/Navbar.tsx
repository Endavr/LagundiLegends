
import React from "react";

const Navbar: React.FC = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 50px",
      backgroundColor: "#003300",
      color: "white",
      height: "80px",
      position: "fixed",
      top: "0",
      zIndex: "1000",
      width: "100%",
      
     
    

    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      alignItems: "center",
      display: "flex",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "20px",
      fontWeight: "bold"
      
      
      
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      cursor: "pointer",

    
      transition: "all 0.3s ease-in-out",

    },
    buttons: {
      display: "flex",
      gap: "15px",
    },
    loginBtn: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#ccc",
      color: "#333",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },
    registerBtn: {
      padding: "10px 15px",
      width: "150px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#008000",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.logo}><img src="4.png" alt="Silan Dental Clinic" style={{ width: '120px', height: 'auto' }}/>Siland Dental Clinic</div>
      <nav>
        <ul style={styles.navLinks}>
          <li><a style={styles.link} href="#services">Services</a></li>
          <li><a style={styles.link} href="#about">About Us</a></li>
          <li><a style={styles.link} href="#contact">Contact Us</a></li>
          <li><a style={styles.link} href="#faqs">FAQs</a></li>
        </ul>
      </nav>
      <div style={styles.buttons}>
      <a href="/login" style={{ textDecoration: "none" }}>
        <button style={styles.loginBtn}onMouseEnter={(e) =>
              {e.currentTarget.style.backgroundColor = "#AAFF00"
                e.currentTarget.style.transform = "scale(1.01)";
              }
              
            }
            onMouseLeave={(e) =>
              {e.currentTarget.style.backgroundColor = "#ccc"
                e.currentTarget.style.transform = "scale(1)";
              }
            }>Login</button></a>
        <a href="/register" style={{ textDecoration: "none" }}>
        <button style={styles.registerBtn}onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#008000";
              e.currentTarget.style.transform = "scale(1.01)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#008000";
              e.currentTarget.style.transform = "scale(1)";
            }}>Register</button></a>
      </div>
    </header>
  );
};

export default Navbar;