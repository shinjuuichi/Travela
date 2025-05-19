// NotificationContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { toast, ToastOptions } from 'react-toastify';

type NotificationType = 'success' | 'warning' | 'error' | 'info';

interface NotificationContextType {
  addNotification: (
    type: NotificationType,
    message: string,
    options?: ToastOptions,
  ) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const addNotification = (
    type: NotificationType,
    message: string,
    options?: ToastOptions,
  ) => {
    switch (type) {
      case 'success':
        toast.success(message, {
          ...options,
          className: 'bg-green-500 text-white',
        });
        break;
      case 'warning':
        toast.warning(message, {
          ...options,
          className: 'bg-yellow-500 text-white',
        });
        break;
      case 'error':
        toast.error(message, {
          ...options,
          className: 'bg-red-500 text-white',
        });
        break;
      case 'info':
        toast.info(message, {
          ...options,
          className: 'bg-blue-500 text-white',
        });
        break;
      default:
        toast(message, options);
    }
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }
  return context;
}
