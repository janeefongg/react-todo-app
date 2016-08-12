import React from 'react';

const CategoryEntry = ({item, select}) => {

  return (
    <div onClick={() => select(item)}>
      <h1>{item}</h1>
    </div>
  )
}

export default CategoryEntry;