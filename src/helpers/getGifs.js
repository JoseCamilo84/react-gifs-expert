export const getGifs = async (category) => {

   const url = `https://api.giphy.com/v1/gifs/search?api_key=BW5indUo2Vu7uirnkdoiTek5HtsWIFgJ&q=${category}&limit=10&offset=0&rating=g&lang=en`;

   const response = await fetch(url);
   const { data } = await response.json();
   const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
   }));

   return gifs;
};
