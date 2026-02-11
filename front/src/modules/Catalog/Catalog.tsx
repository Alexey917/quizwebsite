import { categories } from '@/consts';
import { Card } from './components';

import classes from './Catalog.module.css';

export const Catalog = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {categories.map((category, index) => (
          <Card data={category} dataIndex={index} />
        ))}
      </div>
    </section>
  );
};
