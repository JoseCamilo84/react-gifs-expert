import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

   const [inputValue, setInputValue] = useState('');

   const handleChange = (event) => {
      setInputValue(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      let newCategory = inputValue.trim();
      if (newCategory.length < 1) return;
      onNewCategory(newCategory);// enviando al padre la informacion
      // setCategories(categories => [...categories, inputValue]);
      setInputValue('');
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Buscar Gif..."
            value={inputValue}
            onChange={handleChange}
         />
      </form>
   );
};
