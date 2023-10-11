import React, { FC, useState, useEffect } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import MegaMenu from './Megamenu';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const closeMenuAfterDelay = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setOpenMenu(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  useEffect(() => {
    closeMenuAfterDelay();

    // Add event listeners to handle user interactions
    const handleMenuInteraction = () => {
      setOpenMenu(true); // Set the menu as open when there's an interaction
      closeMenuAfterDelay(); // Reset the timeout
    };

    document.addEventListener('click', handleMenuInteraction);

    return () => {
      document.removeEventListener('click', handleMenuInteraction);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className={`${openMenu ? 'hidden' : 'block'}`}>{children}</div>
      <Footer />
    </div>
  );
};
