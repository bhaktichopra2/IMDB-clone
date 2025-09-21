# IMDb Clone

A simple and responsive web application that mimics some core functionalities of IMDb, allowing users to browse trending movies, add them to a personal watchlist, and manage their list with sorting and filtering options.

---

## Features

- **Trending Movies:** Browse a paginated list of the most popular and trending movies using data from a public API.
- **Movie Details:** View essential information for each movie, including its poster, title, and ratings.
- **Personal Watchlist:** Add and remove movies from your personal watchlist with a single click.
- **Watchlist Management:**
  - **Search:** Quickly find movies within your watchlist using a search bar.
  - **Genre Filtering:** Filter your watchlist by movie genre to find what you're in the mood for.
  - **Sorting:** Sort movies in your watchlist by rating (ascending or descending) and popularity.
- **Responsive Design:** The application is built to be fully responsive and works well on both desktop and mobile devices.

---

## Technologies Used

- **React:** The core JavaScript library for building the user interface.
- **React Router:** For handling client-side routing and navigation between pages.
- **Tailwind CSS:** A utility-first CSS framework used for rapid and responsive UI styling.
- **Axios:** A promise-based HTTP client for making API requests to fetch movie data.
- **The Movie Database (TMDB) API:** The primary data source for movie information, including posters, titles, and ratings.

---

## Installation and Setup

To get a local copy up and running, follow these steps.

1. **Clone the repository:**
    ```
    git clone [your-repo-url]
    cd [your-repo-name]
    ```

2. **Install dependencies:**
    ```
    npm install
    ```

3. **Set up the API key:**

    This project uses a hardcoded API key from TMDB. It is highly recommended to move this to a `.env` file for security.

    - Create a `.env` file in the root of your project and add your API key:
        ```
        REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
        ```

    - Update the API call in `Movies.jsx` to use this environment variable:
      ```
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNo}`).then(...)
      ```

4. **Run the application:**
    ```
    npm start
    ```

This will start the app in development mode at [http://localhost:5173](http://localhost:5173).

---

## Screenshots

- The home page showing trending movies.
- The watchlist page with filtering and sorting applied.
- A clear shot of the responsive design on a mobile device.

![IDMB clone website Screenshot](../IMDB-clone/image1.png)
![IDMB clone website Screenshot](../IMDB-clone/image2.png)
![IDMB clone website Screenshot](../IMDB-clone/image3.png)


---
