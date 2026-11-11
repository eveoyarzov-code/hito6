import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      © 2021 - Pizzería Mamma Mía! - Todos los derechos reservados
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#212529',
    color: 'white',
    textAlign: 'center',
    padding: '15px 0',
    fontFamily: 'sans-serif',
    fontSize: '0.9rem'
  }
};

export default Footer;
