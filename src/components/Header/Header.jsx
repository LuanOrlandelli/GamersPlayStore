import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

function Header() {
  const { cartItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  const totalItens = cartItems.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          GamersPlay Store
        </Link>

        <nav className="nav-actions">
          <button
            className={`theme-switch ${theme === "dark" ? "dark" : ""}`}
            onClick={toggleTheme}
            type="button"
            aria-label="Alternar tema"
          >
            <span className="switch-label">
              {theme === "dark" ? "DARK" : "LIGHT"}
            </span>

            <span className="switch-thumb">
              {theme === "dark" ? "☾" : "☀"}
            </span>
          </button>

          <Link to="/carrinho" className="cart-link">
            🛒 Carrinho ({totalItens})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;