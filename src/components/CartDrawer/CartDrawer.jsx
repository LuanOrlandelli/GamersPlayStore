import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const totalFormatado = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-header">
          <h2>Meu Carrinho</h2>

          <button className="drawer-close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="drawer-empty">
            <p>Seu carrinho está vazio.</p>

            <button onClick={onClose} className="drawer-continue-button">
              Continuar comprando
            </button>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {cartItems.map((item) => (
                <div key={item.id} className="drawer-item">
                  <img src={item.imagem} alt={item.nome} />

                  <div className="drawer-item-info">
                    <h3>{item.nome}</h3>

                    <p>
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>

                    <div className="drawer-quantity">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>

                      <span>{item.quantidade}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>

                    <button
                      className="drawer-remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <strong>{totalFormatado}</strong>
              </div>

              <Link
                to="/carrinho"
                className="drawer-secondary-button"
                onClick={onClose}
              >
                Ver carrinho
              </Link>

              <Link
                to="/checkout"
                className="drawer-primary-button"
                onClick={onClose}
              >
                Finalizar compra
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;