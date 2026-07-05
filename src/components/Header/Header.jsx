import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

function Header() {
  const { cartItems } = useCart();

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

        <nav>
          <Link to="/carrinho" className="cart-link">
            🛒 Carrinho ({totalItens})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;