import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteItems");

    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  function toggleFavorite(product) {
    const alreadyFavorite = favoriteItems.some(
      (item) => item.id === product.id
    );

    if (alreadyFavorite) {
      setFavoriteItems(
        favoriteItems.filter((item) => item.id !== product.id)
      );

      return;
    }

    setFavoriteItems([...favoriteItems, product]);
  }

  function isFavorite(id) {
    return favoriteItems.some((item) => item.id === id);
  }

  const value = {
    favoriteItems,
    toggleFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}