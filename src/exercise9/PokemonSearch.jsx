import React, { useState, useEffect } from "react";

const PokemonSearch= () => {
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchTerm) return;

    const fetchUser = async () => {
      setLoading(true);
      setError("");
      setUser(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${searchTerm}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError("User not found");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [searchTerm]);

  const handleSearch = () => {
    if (username.trim() === "") {
      setError("Please enter a GitHub username");
      return;
    }

    setSearchTerm(username);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <input type="text" placeholder="Enter GitHub username" value={username}
        onChange={(e) => setUsername(e.target.value)}/>

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <h2>{user.name || user.login}</h2>

          <img
            src={user.avatar_url}
            alt={user.login}
            width="150"
          />

          <p>Username: {user.login}</p>
          <p>Location: {user.location || "N/A"}</p>
          <p>Public Repos: {user.public_repos}</p>
          
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;