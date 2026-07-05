import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import api from "../../services/api";
import "./Home.css";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
  const [termoBusca, setTermoBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("");

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

  const produtosFiltrados = produtos
    .filter((produto) => {
      const correspondeCategoria =
        categoriaSelecionada === "todos" ||
        produto.categoria_id === Number(categoriaSelecionada);

      const correspondeBusca =
        produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(termoBusca.toLowerCase());

      return correspondeCategoria && correspondeBusca;
    })
    .sort((a, b) => {
      if (ordenacao === "menor-preco") {
        return a.preco - b.preco;
      }

      if (ordenacao === "maior-preco") {
        return b.preco - a.preco;
      }

      if (ordenacao === "melhor-avaliacao") {
        return b.avaliacao - a.avaliacao;
      }

      if (ordenacao === "nome-az") {
        return a.nome.localeCompare(b.nome);
      }

      return 0;
    });

  return (
    <main className="home-container">
      <section className="hero">
        <h1>GamersPlay Store</h1>
        <p>Os melhores produtos gamers para o seu setup.</p>
      </section>

      <section className="search-area">
        <input
          type="text"
          placeholder="Buscar por produto ou configuração..."
          value={termoBusca}
          onChange={(event) => setTermoBusca(event.target.value)}
        />

        <select
          value={ordenacao}
          onChange={(event) => setOrdenacao(event.target.value)}
        >
          <option value="">Ordenar por</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
          <option value="melhor-avaliacao">Melhor avaliação</option>
          <option value="nome-az">Nome A-Z</option>
        </select>
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

      {produtosFiltrados.length === 0 ? (
        <p className="empty-products">Nenhum produto encontrado.</p>
      ) : (
        <section className="products-grid">
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </section>
      )}
    </main>
  );
}

export default Home;