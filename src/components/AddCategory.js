import { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handeInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit hecho');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handeInputChange} />
    </form>
  );
};

export default AddCategory;
