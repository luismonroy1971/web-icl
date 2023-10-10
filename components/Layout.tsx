import React, { FC } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import MegaMenu from './Megamenu';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className={
        `${openMenu ? 'hidden' : 'block'}`
      }>{children}</div>
      <Footer />
    </div>
  );
};
