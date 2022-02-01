import React from 'react';
import ProductListItem from './ProductListItem';

const ProductListComponent = ({ items }) => (
  <>
    {items.map((u, index) => (
      <ProductListItem key={index} product={u} />
    ))}
  </>
);

export default ProductListComponent;
