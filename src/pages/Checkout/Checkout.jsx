import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [purchaseFinished, setPurchaseFinished] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const totalItens = cartItems.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  const totalFormatado = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleFinishPurchase() {
    clearCart();
    setPurchaseFinished(true);
  }

  if (purchaseFinished) {
    return (
      <main className="checkout-container success-container">
        <h1>✅ Compra realizada com sucesso!</h1>

        <p>Obrigado por comprar na GamersPlay Store.</p>

        <Link to="/" className="back-home-button">
          Voltar para a Loja
        </Link>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="checkout-container empty-checkout">
        <h1>Resumo do Pedido</h1>

        <p>Não há produtos no carrinho para finalizar a compra.</p>

        <Link to="/" className="back-home-button">
          Ver Produtos
        </Link>
      </main>
    );
  }

  return (
    <main className="checkout-container">
      <h1>Resumo do Pedido</h1>

      <section className="checkout-card">
        <div className="checkout-items">
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <div>
                <h3>{item.nome}</h3>
                <p>Quantidade: {item.quantidade}</p>
              </div>

              <strong>
                {(item.preco * item.quantidade).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>
          ))}
        </div>

        <div className="checkout-summary">
          <p>Total de itens: {totalItens}</p>

          <h2>Total: {totalFormatado}</h2>

          <div className="checkout-actions">
            <Link to="/carrinho" className="back-cart-button">
              Voltar ao Carrinho
            </Link>

            <button
              className="finish-button"
              onClick={handleFinishPurchase}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;