import { Catalog } from '@/modules';

import classes from './CatalogPage.module.css';

export const CatalogPage = () => {
  return (
    <main className={classes.main}>
      <Catalog variant="categories" />
    </main>
  );
};
