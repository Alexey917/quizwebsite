import { Catalog } from '@/modules';

import classes from './CatalogPage.module.css';
import { Navigation } from '@/components';

export const CatalogPage = () => {
  return (
    <main className={classes.main}>
      <Navigation />
      <Catalog variant="categories" />
    </main>
  );
};
