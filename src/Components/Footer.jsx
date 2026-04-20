import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} E-Shop. Tous droits réservés.</p>
      <p>Développé par Sadam | Freelance Web Developer</p>
    </footer>
  );
}

export default Footer;