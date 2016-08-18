import React from 'react';

const CategoryEntry = ({item, select}) => {

  return (
    <div onClick={() => select(item)} className="category-entry">
      {item}
    </div>
  )
}

export default CategoryEntry;