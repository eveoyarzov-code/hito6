import React from 'react';
import ImagenHeader from '../assets/Header.jpg';
const Header = () => {
  return (
    <header style={{ ...styles.header, backgroundImage: `url(${ImagenHeader})` }}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>¡Pizzería Mamma Mía!</h1>
        <p style={styles.subtitle}>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '220px',
    position: 'relative',
    color: 'white',
    fontFamily: 'sans-serif'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '2.5rem'
  },
  subtitle: {
    margin: 0,
    fontSize: '1rem'
  }
};

export default Header;
