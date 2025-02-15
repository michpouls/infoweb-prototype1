import React, { useState, useEffect } from 'react';
import styles from './Nav.module.scss';
import { Menu, X } from 'lucide-react';

export const Nav = () =>{
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 800);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>BrandLogo</div>
        {isMobile ? (
          <div className={styles.burgerMenu}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {menuOpen && (
              <div className={styles.mobileMenu}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#our-mission" onClick={() => setMenuOpen(false)}>Our Mission</a>
                <a href="#our-team" onClick={() => setMenuOpen(false)}>Our Team</a>
                <a href="#contact-us" onClick={() => setMenuOpen(false)}>Contact Us</a>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.menu}>
            <a href="#home">Home</a>
            <a href="#our-mission">Our Mission</a>
            <a href="#our-team">Our Team</a>
            <a href="#contact-us">Contact Us</a>
          </div>
        )}
      </nav>
    );
  };