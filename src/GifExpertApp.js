import { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

  // const handleAdd = () => {
  //   // setCategories([...categories, 'test-add'])
  //   setCategories(cats => [...cats, 'test-add'])
  // }
  return (
    <>
      <h2>Gif App</h2>
      <AddCategory />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map(cat => <li key={cat}>{cat}</li>)
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
