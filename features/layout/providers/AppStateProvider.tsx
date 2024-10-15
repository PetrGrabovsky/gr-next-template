'use client';

import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

interface AppStateProviderProps {
  children: ReactNode;
}

const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppStateProvider;
