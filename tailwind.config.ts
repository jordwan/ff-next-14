import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#090E34',
      dark: '#ff0000',
      redbg: '#ff0000',
      gray: '#333333',
      red: '#ff0000',
      primary: '#dcff00',
      yellow: '#FBB040',
      'body-color': '#736482',
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
