import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ produto }) {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcela = (produto.preco / 12).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Link to={`/produto/${produto.id}`} className="product-card">
      <img src={produto.imagem} alt={produto.nome} className="product-image" />

      <div className="product-info">
        <div>
          {produto.destaque && <span className="badge">Destaque</span>}

          <h3>{produto.nome}</h3>

          <p className="product-description">{produto.descricao}</p>
        </div>

        <div className="product-bottom">
          <p className="rating">⭐ {produto.avaliacao}</p>

          <p className="price">{precoFormatado}</p>

          <p className="installments">12x de {parcela} sem juros</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;