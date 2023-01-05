/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider} from 'react-redux'; 
import store from '../../app/store';
import Navbar from '../navbar';
import SideNav from '../sideNav';

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Provider store={store}>
        <SideNav />
        <Navbar />
        <main className='layout'>
          {children}
        </main>
      </Provider>
    </>
  )
}

export default Layout
