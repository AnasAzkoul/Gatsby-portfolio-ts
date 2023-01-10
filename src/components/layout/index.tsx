import React from 'react';
import SEO from '../seo';
import { Provider } from 'react-redux';
import store from '../../app/store';
import Navbar from '../navbar';
import SideNav from '../sideNav';
import Sidebar from '../Sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Provider store={store}>
        <SEO />
        <Sidebar />
        <SideNav />
        <Navbar />
        <main className="layout">{children}</main>
      </Provider>
    </>
  );
};

export default Layout;
