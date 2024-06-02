import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';
import React, { useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

export type NavbarProps = {
  // Prop types go here
  setOpenModal?: (value: boolean) => void;
};

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      base: 'block py-2 md:p-0 text-white',
      active: {
        on: 'text-white dark:text-white md:bg-transparent md:text-white',
        off: 'border-b border-gray-100  text-white hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-white hover:cursor-not-allowed dark:text-white',
        off: '',
      },
    },
  },
};

const NavbarGlobal: React.FC<NavbarProps> = () => {
  useEffect(() => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, []);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar
        className="px-4 py-6 lg:px-16"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 40,
          top: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <Navbar.Brand href="#">
          {/* <img
            src="/fullLogo.png"
            className="h-8 lg:mr-3 lg:h-16"
            alt="Docta Mobile Logo"
          /> */}
          <h1 className="text-2xl font-bold text-white">Harvely</h1>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Link
            activeClass="text-white font-bold border-b-2 border-primary-700"
            to="/home"
            smooth
            spy
            offset={-200}
            className="text-[16px] text-primary-700"
          >
            Home
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-primary-700"
            to="/about"
            smooth
            spy
            offset={-100}
            className="text-[16px] text-primary-700"
          >
            About us
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-primary-700"
            to="/categories"
            smooth
            spy
            className="text-[16px] text-primary-700"
          >
            Nos Categories
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-primary-700"
            to="/team"
            smooth
            spy
            className="text-[16px] text-primary-700"
          >
            Notre equipe
          </Link>
        </Navbar.Collapse>
        <Link
          activeClass="text-secondary-900 font-bold border-b-2 border-white"
          to="/contact"
          smooth
          spy
          offset={-100}
          className="rounded-lg bg-primary-700 px-6 py-1 text-white"
        >
          Contact
        </Link>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as Navbar };
