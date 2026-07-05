import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import CartDrawer from "../CartDrawer/CartDrawer";
import "./Header.css";

function Header() {
  const { cartItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalItens = cartItems.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <>
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

            <button
              className="cart-link cart-button"
              onClick={() => setIsDrawerOpen(true)}
              type="button"
            >
              🛒 Carrinho ({totalItens})
            </button>
          </nav>
        </div>
      </header>

      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}

export default Header;