import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  // const handleAdd = () => {
  //   // setCategories([...categories, 'test-add'])
  //   setCategories(cats => [...cats, 'test-add'])
  // }
  return (
    <>
      <h2 className="title">Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
