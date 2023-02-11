import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['Dragon Ball']);

   const onAddCategory = (newCategory) => {
      // en caso de repetir un nombre por el motivo del key
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
   };

   return (
      <>
         <h1>GifExpertApp</h1>
         <AddCategory onNewCategory={onAddCategory} />

         {
            categories.map(category => (
               <GifGrid
                  key={category}
                  category={category}
               />
            ))
         }

      </>
   );
};