import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   // Esta es otra manera de obtener los gifs de la función que devuelve una promesa
   const getGifsAsync = async () => {
      const gifs = await getGifs(category);
      setImages(gifs);
      setIsLoading(false);
   };

   useEffect(() => {
      getGifsAsync();
      // getGifs(category)
      //    .then(gifs => setImages(gifs));
   }, []);

   return {
      images,
      isLoading
   };
};
