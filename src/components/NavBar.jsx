// 1. Import React
import React from 'react';

// 2. Define the component
const NavBar = () => {
  // 3. Return JSX
  return (
    <nav style={styles.nav}>
      <ul style={styles.list}>
        <li><a style={styles.link} href="/">Home</a></li>
        <li><a style={styles.link} href="/about">About</a></li>
        <li><a style={styles.link} href="/mission">Mission Statement</a></li>
      </ul>
    </nav>
  );
};

// 4. Inline styles (simple example)
const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

// 5. Export the component
export default NavBar;
