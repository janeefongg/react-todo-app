import React from 'react';

const CategoryEntry = ({item, select}) => {

  return (
    <div onClick={() => select(item)}>
      {item}
    </div>
  )
}

export default CategoryEntry;