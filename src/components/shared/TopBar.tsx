'use client';
import ConnectButton from './ConnectButton';
import ConnectWallet from './ConnectWallet';
import { menuItems } from '@/constants';
import { INavLink } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';
import IconUnicornVariant from '../Icon/Unicorn';
import { Input } from '../ui/input';
import IconSearch from '../Icon/Search';
import IconEthereum from '../Icon/Ether';

export default function TopBar() {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center justify-around px-3 py-5">
      <div className="flex items-center justify-center gap-6">
        <IconUnicornVariant fontSize={60} className="text-pink-400" />
        <ul className="flex gap-6">
          {menuItems.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && 'bg-primary-500'
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-1 px-4 py-4 m-5 w-1/2 rounded-lg bg-dark-1 items-center justify-between">
        <IconSearch fontSize={30} className="text-white" />
        <Input type="text" placeholder="Search" className="tokens-search" />
      </div>
      <div className="flex gap-4">
        <div className="flex cursor-pointer items-center">
          <IconEthereum fontSize={30} />
          <p>Network Name</p>
        </div>
        <ConnectButton />
      </div>
    </div>
  );
}
