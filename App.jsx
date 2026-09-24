import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Weather from "./components/Weather";
import NewsCard from "./components/NewsCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  const [recentSearches, setRecentSearches] = useState(() => {
    return JSON.parse(localStorage.getItem("recentSearches")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = (keyword) => {
    if (keyword && !recentSearches.includes(keyword)) {
      const updated = [keyword, ...recentSearches].slice(0, 5);
      setRecentSearches(updated);
    }
  };

  return (
    
     
    <div className="App">
      <Navbar setCategory={setCategory} category={category} />
      <Weather />

      <div className="search-box">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handleSearch(search)}>Search</button>
      </div>
    
      {recentSearches.length > 0 && (
        <div className="recent-box">
          <p>
            Recent:{" "}
            {recentSearches.map((r, i) => (
              <span key={i} onClick={() => setSearch(r)}>
                {r}
              </span>
            ))}
          </p>
        </div>
      )}

      <h2 className="heading">📰 Latest News - {category}</h2>

      <NewsList
        search={search}
        category={category}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>

  );
}

export default App;















<react-router-dom></react-router-dom>