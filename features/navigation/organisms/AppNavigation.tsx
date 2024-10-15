'use client';

import { FC } from 'react';
import { navItems } from '../data/navItems';
import NavLink from '../molecules/NavLink';
import { usePathname } from 'next/navigation';

const AppNavigation: FC = () => {
  const pathName = usePathname() || '/';

  return (
    <nav>
      <ul className='flex items-center justify-center space-x-4'>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              href={item.href}
              label={item.label}
              Icon={item.Icon}
              isActive={pathName === item.href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppNavigation;
