'use client';

import { FC, useEffect } from 'react';

const focusElementById = (id: string) => {
  const element = document.getElementById(id);
  if (element) element.focus();
};

interface ClientAutoFocusHandlerProps {
  elementId: string;
}

const ClientAutoFocusHandler: FC<ClientAutoFocusHandlerProps> = ({ elementId }) => {
  useEffect(() => {
    focusElementById(elementId);
  }, [elementId]);

  return null;
};

export default ClientAutoFocusHandler;
