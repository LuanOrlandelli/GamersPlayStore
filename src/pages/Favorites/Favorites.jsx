import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useFavorites } from "../../context/FavoritesContext";
import "./Favorites.css";

function Favorites() {
  const { favoriteItems } = useFavorites();

  if (favoriteItems.length === 0) {
    return (
      <main className="favorites-empty">
        <h1>Favoritos</h1>
        <p>Você ainda não adicionou produtos aos favoritos.</p>

        <Link to="/" className="favorites-button">
          Ver produtos
        </Link>
      </main>
    );
  }

  return (
    <main className="favorites-container">
      <div className="favorites-header">
        <h1>Meus Favoritos</h1>
        <p>{favoriteItems.length} produto(s) salvo(s)</p>
      </div>

      <section className="favorites-grid">
        {favoriteItems.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </section>
    </main>
  );
}

export default Favorites;