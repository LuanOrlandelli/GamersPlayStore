import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import api from "../../services/api";
import "./Home.css";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");

  useEffect(() => {
    async function carregarDados() {
      try {
        const [produtosResponse, categoriasResponse] = await Promise.all([
          api.get("/produtos"),
          api.get("/categorias"),
        ]);

        setProdutos(produtosResponse.data);
        setCategorias(categoriasResponse.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    carregarDados();
  }, []);

  const produtosFiltrados =
    categoriaSelecionada === "todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria_id === Number(categoriaSelecionada)
        );

  return (
    <main className="home-container">
      <section className="hero">
        <h1>GamersPlay Store</h1>
        <p>Os melhores produtos gamers para o seu setup.</p>
      </section>

      <section className="filters">
        <button
          className={categoriaSelecionada === "todos" ? "active" : ""}
          onClick={() => setCategoriaSelecionada("todos")}
        >
          Todos
        </button>

        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            className={
              categoriaSelecionada === String(categoria.id) ? "active" : ""
            }
            onClick={() => setCategoriaSelecionada(String(categoria.id))}
          >
            {categoria.nome}
          </button>
        ))}
      </section>

      <section className="products-grid">
        {produtosFiltrados.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </section>
    </main>
  );
}

export default Home;