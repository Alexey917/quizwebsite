import { Categories } from '@/modules';
import classes from './CatalogPage.module.css';

export const CatalogPage = () => {
  return (
    <main className={classes.main}>
      <h1>Catalog</h1>
      <Categories />
    </main>
  );
};
