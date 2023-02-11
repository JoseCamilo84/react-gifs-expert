import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

   const { images, isLoading } = useFetchGif(category);// Mi primer Custom Hook

   return (
      <>
         <h2>{category}</h2>

         {
            isLoading && <h3>Cargando...</h3>
         }

         <div className="card-grid">
            {
               images.map(image => (
                  <GifItem
                     key={image.id}
                     {...image}
                  />
               ))
            }
         </div>
      </>
   );
};
