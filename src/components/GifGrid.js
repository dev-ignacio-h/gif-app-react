// import { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && 'Cargando...'}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
