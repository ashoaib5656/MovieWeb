import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { GENRES, ACTORS, OMDB_API_KEY } from "../constants";
import axios from "axios";

const HeaderComp = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  const saveRecentSearch = (query: string) => {
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      setIsLoading(true);
      axios
        .get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchQuery}`)
        .then((response) => {
          if (response.data.Search) {
            setSuggestions(response.data.Search.slice(0, 5));
          } else {
            setSuggestions([]);
          }
          setSelectedIndex(-1);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Search error:", error);
          setSelectedIndex(-1);
          setIsLoading(false);
        });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      // Delay focus to allow transition
      setTimeout(() => {
        const input = document.getElementById('search-input');
        if (input) input.focus();
      }, 100);
    } else {
      setSearchQuery("");
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery.trim());
      navigate(`/movies/${searchQuery}`);
      toggleSearch();
    }
  };

  const handleSuggestionClick = (title: string) => {
    saveRecentSearch(title);
    navigate(`/movies/${title}`);
    toggleSearch();
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") toggleSearch();
    
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        handleSuggestionClick(suggestions[selectedIndex].Title);
      } else if (e.key === "Enter") {
        handleSearchSubmit();
      }
    } else if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <>
      <header className="production-header">
        <div className="nav_container">
          <Link to="/" className="brand-link">
            <div className="brand-content">
              <img className="logo-icon" src="/images/movie_logo.jpg" alt="Movie Section Logo" />
              <div className="brand-text">
                <span className="text-white">Movie</span>
                <span className="text-accent">Section</span>
              </div>
            </div>
          </Link>

          <nav className="nav-links">
            <NavLink to="/" className="nav-item">Movie Picker</NavLink>
            
            <div className="nav-dropdown">
              <span className="nav-item dropdown-trigger">
                GENRES <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                {GENRES.map((genre) => (
                  <li key={genre}>
                    <NavLink to={`/movies/${genre.toLowerCase()}`}>{genre}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-dropdown">
              <span className="nav-item dropdown-trigger">
                ACTORS <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                {ACTORS.map((actor) => (
                  <li key={actor}>
                    <NavLink to={`/movies/${actor}`}>{actor}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <NavLink to="/blog" className="nav-item">BLOG</NavLink>
          </nav>

          <div className="header-actions">
            <button className="action-btn" onClick={toggleSearch} aria-label="Toggle Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            
            <div className="social-links">
              <a href="https://www.facebook.com/PickAMovieForMeOfficial" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>

            <Button
              className="logout-button"
              variant="outlined"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className={`search-overlay ${isSearchVisible ? 'active' : ''}`} onKeyDown={handleKeyDown}>
        <div className="search-wrap">
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass search-icon-main"></i>
            <input
              id="search-input"
              type="text"
              placeholder="Search movies, actors, genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            <div className="search-ctrls">
              {searchQuery && (
                <button className="search-clear" onClick={clearSearch}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              )}
              <div className="search-divider"></div>
              <button className="search-close-elite" onClick={toggleSearch}>
                ESC
              </button>
            </div>
          </div>

          {!searchQuery && (
            <div className="search-initial">
              {recentSearches.length > 0 && (
                <div className="recent-section">
                  <h3 className="search-section-title">RECENT SEARCHES</h3>
                  <div className="recent-list">
                    {recentSearches.map((term, index) => (
                      <div 
                        key={term} 
                        className={`recent-item ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleSuggestionClick(term)}
                      >
                        <i className="fa-regular fa-clock"></i>
                        <span>{term}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="quick-links-section">
                <h3 className="search-section-title">QUICK LINKS</h3>
                <div className="quick-links-grid">
                  {GENRES.slice(0, 4).map((genre) => (
                    <button key={genre} className="quick-link-btn" onClick={() => handleSuggestionClick(genre)}>
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {(searchQuery && (suggestions.length > 0 || isLoading)) && (
            <div className="search-suggestions">
              {isLoading ? (
                <div className="suggestion-loading">
                  <div className="loader-elite"></div>
                  <span>Searching for cinematic treasures...</span>
                </div>
              ) : (
                suggestions.map((movie, index) => (
                  <div 
                    key={movie.imdbID} 
                    className={`suggestion-item ${selectedIndex === index ? 'selected' : ''}`}
                    onClick={() => handleSuggestionClick(movie.Title)}
                  >
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "/images/placeholder.jpg"} alt={movie.Title} className="suggestion-poster" />
                    <div className="suggestion-info">
                      <span className="suggestion-title">{movie.Title}</span>
                      <div className="suggestion-meta">
                        <span className="suggestion-year">{movie.Year}</span>
                        <span className="suggestion-type">{movie.Type}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
          {searchQuery && !isLoading && suggestions.length === 0 && (
            <div className="no-results-elite">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
              <p>We couldn't find any results for "<span>{searchQuery}</span>"</p>
              <button className="back-btn-elite" onClick={clearSearch}>Try another search</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
