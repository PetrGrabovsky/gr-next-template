import AppNavigation from '@/features/navigation/organisms/AppNavigation';
import { FC } from 'react';

const AppHeader: FC = () => {
  return (
    <header className='flex h-14 items-center justify-between bg-blue-900'>
      <p>Logo</p>
      <AppNavigation />
    </header>
  );
};

export default AppHeader;
