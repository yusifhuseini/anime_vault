# Next 14 Server Side App with Server Actions, Infinite Scroll & Framer Motion Animations

## Anime Vault: Infinite Scrolling Anime Cards with Next.js 14 and Framer Motion

This project demonstrates building a web application showcasing a list of anime with infinite scrolling functionality. It uses Next.js 14 for server-side rendering and Framer Motion for animations.

### Features

- Fetches anime data from a real API (Shikimori API)
- Implements infinite scroll to load more anime cards as you scroll down
- Uses Framer Motion to create smooth animations for loading cards

### Add More

- Infinite scrolling of anime images
- Smooth animations with Framer Motion
- Server-side rendering with Next.js
- Client-side rendering for specific components
- Optimized for performance and SEO

### Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shikimori API](https://shikimori.one/api/doc/1.0)
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)

### Getting Started

1. Clone this repository: `git clone https://github.com/yusifhuseini/anime-vault.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open http://localhost:3000 in your browser

### Project Structure

- `app`: Contains the main application components
  - `index.js`: Home page component displaying the anime list
  - `load.js`: Component handling infinite scroll functionality
  - `animeCard.tsx`: Component for rendering individual anime cards
- `_data.js`: (Optional) Sample static anime data (used for initial development)
- `actions.tsx`: Server actions for fetching anime data
- `styles`: Global CSS styles

### How it Works

1. The `index.js` and `load.js` components call the `fetchAnime` server action to retrieve anime data.
2. `fetchAnime` fetches data from the Shikimori API and returns it as pre-animated components for smooth loading.
3. The components render the received anime cards with Framer Motion animations for a visually appealing experience.
4. Infinite scroll is implemented by calling `fetchAnime` with the next page number as the user scrolls down.

### Additional Notes

- This project demonstrates a basic implementation of infinite scroll and animations. You can further customize the functionality and styling to fit your needs.
- The `_data.js` file is provided for initial development without an API. Remove it once you integrate the real API.

### Contributing

We welcome contributions to this project! Please create a pull request with your changes.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Team

Developed by Huseini Yusif.
