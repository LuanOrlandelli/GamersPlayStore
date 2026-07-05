import { Link } from "react-router-dom";
import "./AddToCartModal.css";

function AddToCartModal({ produto, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="add-cart-modal">
        <h2>Produto adicionado!</h2>

        <p>
          <strong>{produto.nome}</strong> foi adicionado ao carrinho.
        </p>

        <div className="modal-actions">
          <button onClick={onClose} className="continue-button">
            Continuar comprando
          </button>

          <Link to="/carrinho" className="go-cart-button">
            Ir para o carrinho
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;