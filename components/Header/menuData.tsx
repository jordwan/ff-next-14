import { Menu } from '@/types/menu';

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "/",
  //   newTab: false,
  // },
  {
    id: 2,
    title: 'About Us',
    path: '/about',
    newTab: false,
  },
  //  {
  //    id: 33,
  //    title: "Blog",
  //    path: "/blog",
  //    newTab: false,
  //  },
  {
    id: 3,
    title: 'Locations',
    path: '/contact',
    newTab: false,
  },
  {
    id: 4,
    title: 'Services',
    newTab: false,
    submenu: [
      {
        id: 41,
        title: 'Home Automation',
        path: '/home-automation',
        newTab: false,
      },
      {
        id: 42,
        title: 'TV Wall Mounting',
        path: '/tv-wall-mounting',
        newTab: false,
      },
      {
        id: 43,
        title: 'Lighting Control',
        path: '/smart-lighting',
        newTab: false,
      },
      {
        id: 44,
        title: 'Structured Wiring',
        path: '/structured-wiring',
        newTab: false,
      },
      {
        id: 45,
        title: 'Home Theater',
        path: '/home-theater-hifi-audio',
        newTab: false,
      },
      {
        id: 46,
        title: 'Home Security',
        path: '/home-security',
        newTab: false,
      },
      {
        id: 47,
        title: 'Access Control',
        path: '/access-control',
        newTab: false,
      },
      {
        id: 48,
        title: 'WiFi and Home Networking',
        path: '/networking-wifi',
        newTab: false,
      },
    ],
  },
];
export default menuData;
