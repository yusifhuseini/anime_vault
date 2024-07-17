"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  console.log(data);

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

// ========================================================================================================

// "use server";

// import AnimeCard, { MovieProp } from "@/components/AnimeCard";

// export const fetchMovies = async (page: number) => {
//   try {
//     const response = await fetch(
//       `https://apidisneymovies.bsite.net/api/v1/movies/all`
//     );

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();

//     return data.map((item: MovieProp, index: number) => (
//       <AnimeCard key={item.id} movie={item} index={index} />
//     ));
//   } catch (error) {
//     console.error("Failed to fetch movies:", error);
//     return [];
//   }
// };

// ========================================================================================================

// "use server";

// import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// const fetchWithRetry = async (
//   url: string,
//   options = {},
//   retries = 3,
//   backoff = 300
// ) => {
//   for (let i = 0; i < retries; i++) {
//     try {
//       const response = await fetch(url, options);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       if (i < retries - 1) {
//         console.log(`Retrying fetch... (${i + 1})`);
//         await new Promise((res) => setTimeout(res, backoff));
//       } else {
//         console.error("Fetch failed:", error);
//         throw error;
//       }
//     }
//   }
// };

// export const fetchAnime = async (page: number) => {
//   const url = `http://api.disneyapi.dev/character?page=${page}&pageSize=8`;

//   try {
//     const data = await fetchWithRetry(url);
//     console.log(data);
//     return data.data.map((item: AnimeProp, index: number) => (
//       <AnimeCard key={item._id} anime={item} index={index} />
//     ));
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//     return [];
//   }
// };
