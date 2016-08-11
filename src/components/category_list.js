import React from 'react';

import CategoryEntry from './category_entry';

const CategoryList = ({categories}) => {
  console.log('this is task', categories);
  const categoriesArr = categories.map((category, index) => {
    return <CategoryEntry key={index} item={category} />
  });

  return (
    <div>
      {categoriesArr}
    </div>
  )
}


export default CategoryList;