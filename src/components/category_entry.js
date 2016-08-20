import React from 'react';
import DeleteIcon from 'react-icons/lib/ti/delete';

const CategoryEntry = ({item, select, remove}) => {

  return (
    <div onClick={() => select(item)} className="category-entry">
      <DeleteIcon onClick={() => remove(item) }/>
      {item}
    </div>
  )
}

export default CategoryEntry;