import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

function ProductCard({ produto }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcela = (produto.preco / 12).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleAddToCart() {
    addToCart(produto);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  return (
    <>
      {showToast && (
        <div className="card-toast">
          Produto adicionado ao carrinho!
        </div>
      )}

      <article className="product-card">
        <Link to={`/produto/${produto.id}`} className="product-card-link">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="product-image"
          />

          <div className="product-info">
            <div>
              {produto.destaque && <span className="badge">Destaque</span>}

              <h3>{produto.nome}</h3>

              <p className="product-description">{produto.descricao}</p>
            </div>

            <div className="product-bottom">
              <p className="rating">⭐ {produto.avaliacao}</p>

              <div className="price-row">
                <p className="price">{precoFormatado}</p>

                <button
                  className="mini-cart-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart();
                  }}
                  title="Adicionar ao carrinho"
                >
                  🛒+
                </button>
              </div>

              <p className="installments">
                12x de {parcela} sem juros
              </p>
            </div>
          </div>
        </Link>

      </article>
    </>
  );
}

export default ProductCard;