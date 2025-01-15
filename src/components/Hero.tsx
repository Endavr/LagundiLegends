import React from "react";

const Hero: React.FC = () => {
  const styles = {
    hero: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "50px",
      paddingTop: "130px",
      background: "radial-gradient(circle,rgb(209, 243, 141),rgb(0, 171, 0))",
      color: "white",
    },
    content: {
      maxWidth: "50%",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    text: {
      fontSize: "1.2rem",
      marginBottom: "20px",
      lineHeight: "1.5",
    },
    button: {
      backgroundColor: "#33cc33",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    image: {
      maxWidth: "500px",
      borderRadius: "10px",
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Your Smile, Our Priority</h1>
        <p style={styles.text}>
          We provide exceptional dental care for the Indang, Cavite community.
          With decades of trusted service, we're now embracing digital
          innovation for your convenience.
        </p>
        <a href="/appointment" style={{ textDecoration: "none" }}>
        <button style={styles.button}>Book Your Appointment Now!</button></a>
      </div>
      <div>
        <img style={styles.image} src="/dental-clinic.jpg" alt="Dental Clinic" />
      </div>
    </section>
  );
};

export default Hero;