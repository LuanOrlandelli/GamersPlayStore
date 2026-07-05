import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await api.get(`/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarProduto();
  }, [id]);

  function handleAddToCart() {
    addToCart(produto);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  }

  if (loading) {
    return <h2>Carregando produto...</h2>;
  }

  if (!produto) {
    return <h2>Produto não encontrado.</h2>;
  }

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcela = (produto.preco / 12).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      {showToast && (
        <div className="toast">
          Produto adicionado ao carrinho!
        </div>
      )}

      <main className="product-details-container">
        <div className="product-image-container">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        <div className="product-info-container">
          <h1>{produto.nome}</h1>

          <p className="rating">⭐ {produto.avaliacao}</p>

          <p className="description">{produto.descricao}</p>

          <p className="price">{precoFormatado}</p>

          <p className="installments">12x de {parcela} sem juros</p>

          <p className="stock">Estoque disponível: {produto.estoque}</p>

          <button
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;