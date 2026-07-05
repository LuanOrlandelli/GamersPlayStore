import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-container">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você tentou acessar não existe ou foi removida.</p>

      <Link to="/" className="not-found-button">
        Voltar para a loja
      </Link>
    </main>
  );
}

export default NotFound;