import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
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

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Seu carrinho está vazio</h1>
        <p>Adicione alguns produtos para continuar.</p>
      </div>
    );
  }

  return (
    <main className="cart-container">
      <h1 className="cart-title">Carrinho de Compras</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imagem}
                alt={item.nome}
              />

              <div className="cart-item-info">
                <h3>{item.nome}</h3>

                <p>{item.descricao}</p>

                <p className="cart-price">
                  {item.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span>{item.quantidade}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary-card">
          <h2>Resumo do Pedido</h2>

          <p>
            Produtos:
            {" "}
            {cartItems.length}
          </p>

          <p className="summary-total">
            {totalFormatado}
          </p>

          <Link to="/checkout">
            <button className="checkout-button">
              Finalizar Compra
            </button>
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;