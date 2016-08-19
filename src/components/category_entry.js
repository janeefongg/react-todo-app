import React from 'react';
import DeleteIcon from 'react-icons/lib/ti/delete';

const CategoryEntry = ({item, select}) => {

  return (
    <div onClick={() => select(item)} className="category-entry">
      <DeleteIcon />
      {item}
    </div>
  )
}

export default CategoryEntry;