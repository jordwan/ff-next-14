'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';
import menuData from './menuData';

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
            : 'absolute'
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? 'pt-4 lg:py-2' : 'py-4'
                } `}
              >
                <svg
                  height="72"
                  className="fill-current pt-1 lg:pt-3"
                  viewBox="0 0 62 62"
                >
                  <path
                    d="M94.85,48h4.43L98.22,63.45h1.72L101,48h3.43l-1.06,15.45h1.72L106.15,48h4.08L108.1,69.64H94.37Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M114.3,69.64H110L112,48h2.34Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M127.49,48l-1.76,13.91H124l2.6,7.73h-4.42l-1.75-7.73h-.87l.39,7.73h-4L117.32,48Zm-4.37,6.18H120l-.09,1.55H123Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M130.71,63.45h5.74l-.35,6.19h-8.61L128.72,48h8.61L137,54.18h-5.74l-.09,1.55h5.74l-.36,6.18h-5.74Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M148.74,48l-.37,6.18H142.3l-.09,1.55h6.06l-.84,13.91h-9.09l-.26-6.19h6.69l.09-1.54h-6.78L139.64,48Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M89.06,83.72h4.21l-.65,6.43h4.21l.78-7.71H89.19l.51-5.15h12.63l-1.81,18H87.89Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M104.6,77.29h11.46l-1.64,18H110l1-3.85h-3.82l.47,3.85H103ZM108,82.44l-.35,3.85h3.82l.35-3.85Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M125.56,82.44,125,95.29h-5.52l2-12.85h-4l.49-5.15h12l-.49,5.15Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M131.69,77.29H143l-1.61,18h-3.76l-.26-3.85h-2.21l-1.29,3.85h-3.76Zm3.3,5.15-.35,3.85h3.76l.34-3.85Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M94.88,71.07H107.6l.8,4.79H102l-.43-1H97.82l-.53,1H90.16Zm3.72,1.37-.4,1H101l-.2-1Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M114.67,72.65l-.37,3.21h-4.37l-.67-4.79h6l3.06,1.37,1.18-1.37h7.07l-2.79,4.79h-6.11Z"
                    transform="translate(-87.89 -48)"
                  />
                  <path
                    d="M127.49,72.78h6.35l-.66,1.71h4.24l1.63-2H126.59l.9-1.37H147l-4,4.79H125.5Z"
                    transform="translate(-87.89 -48)"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? ' top-[7px] rotate-45' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? 'opacity-0 ' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? 'visibility top-full opacity-100'
                      : 'invisible top-[120%] opacity-0'
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? 'block' : 'hidden'
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path || ''}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/"
                  className="hidden px-7 py-3 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                >
                  {' '}
                  Login
                </Link>
                <Link
                  href="/contact"
                  className="ease-in-up hidden rounded-md bg-primary px-8 py-3 text-base font-bold text-black transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Contact Us
                </Link>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
