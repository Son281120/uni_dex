import React from 'react';
import TopBar from '../shared/TopBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <TopBar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
