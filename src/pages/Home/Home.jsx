import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import api from "../../services/api";
import "./Home.css";

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get("/produtos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    carregarProdutos();
  }, []);

  return (
    <main className="home-container">
      <section className="hero">
        <h1>GamersPlay Store</h1>
        <p>Os melhores produtos gamers para o seu setup.</p>
      </section>

      <section className="products-grid">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </section>
    </main>
  );
}

export default Home;