import { Loading } from '@/components/common/Loading/Loading';
import React, { JSX, Suspense } from 'react';

type ReturnType<T> = (props: T) => JSX.Element;

export const withLoading = <T extends object>(
  Component: React.ComponentType<T>,
): ReturnType<T> => {
  const WrappedComponent = (props: T) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

  WrappedComponent.displayName = `withLoading(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};
