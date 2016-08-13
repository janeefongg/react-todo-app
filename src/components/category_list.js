import React from 'react';

import CategoryEntry from './category_entry';

const CategoryList = ({categories, selectCategory}) => {
  const categoriesArr = categories.map((category, index) => {
    return <CategoryEntry key={index} select={selectCategory} item={category} />
  });

  return (
    <div>
      {categoriesArr}
    </div>
  )
}


export default CategoryList;