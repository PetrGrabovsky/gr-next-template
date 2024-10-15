import { FC } from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';
import clsx from 'clsx';

interface NavLinkProps {
  href: string;
  label: string;
  Icon?: IconType;
  isActive: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, label, Icon, isActive }) => {
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        isActive ? 'font-bold text-blue-500' : 'text-white',
        'flex items-center justify-center outline-none focus-visible:ring'
      )}
    >
      {Icon && <Icon aria-hidden='true' className='h-5 w-5' />}
      {label}
    </Link>
  );
};

export default NavLink;
