import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import AddToCartModal from "../../components/AddToCartModal/AddToCartModal";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const [produto, setProduto] = useState(null);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await api.get("/produtos");

        const produtoAtual = response.data.find(
          (item) => String(item.id) === String(id)
        );

        if (!produtoAtual) {
          setProduto(null);
          return;
        }

        setProduto(produtoAtual);

        const relacionados = response.data
          .filter(
            (item) =>
              String(item.categoria_id) === String(produtoAtual.categoria_id) &&
              String(item.id) !== String(produtoAtual.id)
          )
          .slice(0, 3);

        setProdutosRelacionados(relacionados);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
        setProduto(null);
      } finally {
        setLoading(false);
      }
    }

    carregarProduto();
  }, [id]);

  function handleAddToCart() {
    addToCart(produto);
    setShowModal(true);
  }

  if (loading) {
    return <h2 className="loading-message">Carregando produto...</h2>;
  }

  if (!produto) {
    return <h2 className="loading-message">Produto não encontrado.</h2>;
  }

  const favorited = isFavorite(produto.id);

  const precoFormatado = Number(produto.preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcela = (Number(produto.preco) / 12).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const estoque = Number(produto.estoque);

  const estoqueClasse =
    estoque === 0 ? "out" : estoque <= 10 ? "low" : "available";

  const estoqueTexto =
    estoque === 0 ? "Esgotado" : estoque <= 10 ? "Últimas unidades" : "Em estoque";

  return (
    <>
      {showModal && (
        <AddToCartModal produto={produto} onClose={() => setShowModal(false)} />
      )}

      <main className="product-details-page">
        <section className="product-details-container">
          <div className="product-image-container">
            <img src={produto.imagem} alt={produto.nome} />
          </div>

          <div className="product-info-container">
            <div className="details-top-row">
              <div className="details-badges">
                {produto.destaque && (
                  <span className="details-badge">Destaque</span>
                )}

                <span className={`details-stock-badge ${estoqueClasse}`}>
                  {estoqueTexto}
                </span>
              </div>

              <button
                className={`details-favorite-button ${
                  favorited ? "active" : ""
                }`}
                onClick={() => toggleFavorite(produto)}
                type="button"
                title={
                  favorited
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                {favorited ? "♥" : "♡"}
              </button>
            </div>

            <h1>{produto.nome}</h1>

            <p className="rating">⭐ {produto.avaliacao}</p>

            <p className="description">{produto.descricao}</p>

            <p className="price">{precoFormatado}</p>

            <p className="installments">12x de {parcela} sem juros</p>

            <p className="stock">Estoque disponível: {estoque}</p>

            <button
              className="add-cart-button"
              onClick={handleAddToCart}
              disabled={estoque === 0}
            >
              {estoque === 0 ? "Produto esgotado" : "Adicionar ao Carrinho"}
            </button>

            <div className="purchase-benefits">
              <div>✅ Produto em estoque</div>
              <div>🚚 Envio imediato</div>
              <div>🔒 Compra segura</div>
              <div>💳 Até 12x sem juros</div>
            </div>
          </div>
        </section>

        <section className="details-section">
          <h2>Detalhes do Produto</h2>

          <p>
            O {produto.nome} foi selecionado para quem busca desempenho,
            qualidade e uma experiência gamer mais completa. Ideal para montar
            ou melhorar o setup, oferecendo excelente custo-benefício dentro da
            sua categoria.
          </p>
        </section>

        {produtosRelacionados.length > 0 && (
          <section className="related-products-section">
            <h2>Você também pode gostar</h2>

            <div className="related-products-grid">
              {produtosRelacionados.map((item) => (
                <ProductCard key={item.id} produto={item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default ProductDetails;