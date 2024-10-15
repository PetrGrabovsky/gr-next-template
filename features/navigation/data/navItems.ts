import { IconType } from 'react-icons';
import { HomeIcon } from '@/shared/data/pageIcons';

interface NavItem {
  id: number;
  href: string;
  label: string;
  Icon: IconType;
}

export const navItems: NavItem[] = [
  { id: 1, href: '/', label: 'Home', Icon: HomeIcon },
  { id: 2, href: '/odkaz2', label: 'Odkaz 2', Icon: HomeIcon },
  { id: 3, href: '/odkaz3', label: 'Odkaz 3', Icon: HomeIcon },
  { id: 4, href: '/about', label: 'About', Icon: HomeIcon },
];
