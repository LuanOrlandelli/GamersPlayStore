import { useEffect, useState } from "react";
import api from "../../services/api";

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
    <div>
      <h1>GamersPlay Store</h1>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;