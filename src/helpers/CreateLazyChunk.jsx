import { lazy } from 'react';

export const CreateLazyChunk = (pageName, route) => {
  return lazy(() =>
    import(`../pages/${route}`).then(module => ({
      default: module[pageName],
    })),
  );
};
