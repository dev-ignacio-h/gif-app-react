// import { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);
  category = category.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
