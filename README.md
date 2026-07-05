# GamersPlayStore

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![JSON Server](https://img.shields.io/badge/JSON_Server-API-green)
![Git](https://img.shields.io/badge/Git-Version_Control-orange)

### Projeto desenvolvido por Luan Orlandelli Ramos
### Desafio Técnico Front-end React

---

## Sobre o Projeto

A **GamersPlayStore** é uma aplicação de e-commerce desenvolvida utilizando React, criada para simular uma loja virtual moderna de produtos gamers.

O projeto foi desenvolvido consumindo uma API REST simulada através do JSON Server, permitindo uma arquitetura desacoplada entre front-end e back-end, semelhante a cenários reais de desenvolvimento de produtos.

Além dos requisitos obrigatórios do desafio, foram implementadas funcionalidades adicionais com foco em experiência do usuário, organização de código, componentização, gerenciamento de estado e boas práticas de desenvolvimento Front-end.

---

# Screenshots

> Adicione aqui imagens da aplicação após realizar o deploy ou capturar as telas.

## Página Inicial

![Home](./screenshots/home.png)

## Detalhes do Produto

![Produto](./screenshots/produto.png)

## Carrinho Lateral

![Carrinho](./screenshots/carrinho.png)

## Favoritos

![Favoritos](./screenshots/favoritos.png)

---

---

# Competências Demonstradas

Este projeto foi desenvolvido com foco em demonstrar conhecimentos alinhados às competências esperadas para a vaga de **Estagiário(a) Desenvolvedor Front-end da TGID**.

Durante o desenvolvimento foram aplicados conceitos relacionados a:

### Desenvolvimento Front-end com React

- Componentização
- Reutilização de código
- React Router
- Context API
- Gerenciamento de estado
- Manipulação de eventos
- Consumo de APIs REST
- Navegação SPA (Single Page Application)

### Resolução de Problemas

- Implementação de filtros dinâmicos
- Ordenação de produtos
- Persistência utilizando LocalStorage
- Tratamento de rotas inexistentes
- Controle de estoque
- Carrinho de compras com atualização em tempo real
- Produtos relacionados por categoria

### Qualidade de Código

- Separação por responsabilidades
- Estrutura escalável de diretórios
- Componentes reutilizáveis
- Organização de estados globais
- Código modularizado

### Boas Práticas

- Versionamento com Git
- Commits incrementais
- Responsividade
- Interface intuitiva
- Documentação completa
- Componentização de telas e funcionalidades

### Aprendizado Contínuo

O projeto foi desenvolvido buscando simular um ambiente próximo ao desenvolvimento de produtos reais, aplicando conceitos modernos do ecossistema React e práticas utilizadas no mercado.

---

# Tecnologias Utilizadas

## Front-end

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- Axios
- CSS3
- HTML5

## Gerenciamento de Estado

- Context API

## Persistência

- LocalStorage

## Simulação de Back-end

- JSON Server

## Controle de Versão

- Git
- GitHub

---

# Funcionalidades Implementadas

## Produtos

- Listagem de produtos
- Visualização de detalhes
- Produtos em destaque
- Produtos relacionados
- Avaliação dos produtos
- Controle de estoque
- Parcelamento em até 12x sem juros

## Busca e Filtros

- Busca por nome
- Busca por descrição
- Filtro por categoria
- Ordenação por:
  - Menor preço
  - Maior preço
  - Melhor avaliação
  - Nome A-Z

## Carrinho de Compras

- Adicionar produtos
- Remover produtos
- Alterar quantidades
- Carrinho lateral (Drawer)
- Página completa do carrinho
- Persistência com LocalStorage
- Cálculo automático do valor total

## Checkout

- Resumo do pedido
- Quantidade total de itens
- Valor total
- Retorno para o carrinho
- Finalização simulada da compra

## Favoritos

- Adicionar produtos aos favoritos
- Remover favoritos
- Página exclusiva de favoritos
- Persistência com LocalStorage

## Experiência do Usuário

- Dark Mode
- Modal de confirmação ao adicionar produtos
- Página 404 personalizada
- Responsividade
- Indicadores visuais de estoque
- Feedback visual para ações do usuário

---

# Arquitetura e Decisões Técnicas

A aplicação foi estruturada seguindo princípios de componentização e separação de responsabilidades.

## Context API

A Context API foi utilizada para centralizar estados globais sem a necessidade de bibliotecas externas.

Foram criados contextos independentes:

### CartContext

Responsável por:

- Adicionar produtos
- Remover produtos
- Alterar quantidades
- Persistência do carrinho

### FavoritesContext

Responsável por:

- Adicionar favoritos
- Remover favoritos
- Persistência dos favoritos

### ThemeContext

Responsável por:

- Controle do tema claro/escuro
- Persistência da preferência do usuário

---

## JSON Server

O JSON Server foi utilizado para simular um ambiente real de integração com APIs REST.

Isso permitiu:

- Separação entre front-end e back-end
- Consumo de dados via HTTP
- Simulação de endpoints reais

---

## React Router

A navegação da aplicação foi construída utilizando React Router DOM.

Rotas implementadas:

- Home
- Produto
- Carrinho
- Checkout
- Favoritos
- Página 404

---

## LocalStorage

Utilizado para persistir informações entre sessões:

- Carrinho
- Favoritos
- Tema selecionado

---

# Estrutura do Projeto

```txt
src/
├── components/
│   ├── AddToCartModal/
│   ├── CartDrawer/
│   ├── Header/
│   └── ProductCard/
│
├── context/
│   ├── CartContext.jsx
│   ├── FavoritesContext.jsx
│   └── ThemeContext.jsx
│
├── pages/
│   ├── Cart/
│   ├── Checkout/
│   ├── Favorites/
│   ├── Home/
│   ├── NotFound/
│   └── ProductDetails/
│
├── routes/
│   └── AppRoutes.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
```

---

# Como Executar o Projeto

## Pré-requisitos

Ter instalado:

- Node.js
- npm
- Git

Verifique as versões:

```bash
node -v
npm -v
git --version
```

---

## 1. Clonar o Repositório

```bash
git clone https://github.com/LuanOrlandelli/GamersPlayStore.git
```

Entrar na pasta:

```bash
cd GamersPlayStore
```

---

## 2. Instalar Dependências

```bash
npm install
```

---

## 3. Iniciar o JSON Server

Em um terminal execute:

```bash
npm run server
```

A API será iniciada em:

```txt
http://localhost:3001
```

Endpoints:

```txt
http://localhost:3001/produtos
http://localhost:3001/categorias
```

---

## 4. Iniciar o Front-end

Em outro terminal execute:

```bash
npm run dev
```

A aplicação estará disponível em:

```txt
http://localhost:5173
```

---

# Scripts Disponíveis

### Executar ambiente de desenvolvimento

```bash
npm run dev
```

### Executar JSON Server

```bash
npm run server
```

### Gerar build de produção

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

### Executar ESLint

```bash
npm run lint
```

---

# Rotas da Aplicação

| Rota | Descrição |
|--------|--------|
| / | Página Inicial |
| /produto/:id | Detalhes do Produto |
| /carrinho | Carrinho de Compras |
| /checkout | Finalização da Compra |
| /favoritos | Produtos Favoritos |
| * | Página 404 |

---

# Exemplo da API

## Produto

```json
{
  "id": 1,
  "nome": "Notebook Gamer Zion",
  "descricao": "Ryzen 7 5700X3D, 16GB RAM DDR4, SSD NVMe 512GB, RTX 4060",
  "preco": 5499.90,
  "categoria_id": 1,
  "estoque": 8,
  "avaliacao": 4.8,
  "destaque": true
}
```

## Categoria

```json
{
  "id": 1,
  "nome": "Notebooks"
}
```

---

# Diferenciais Implementados

Além dos requisitos obrigatórios do desafio, foram implementados:

- Dark Mode com persistência
- Página de Favoritos
- Carrinho lateral (Drawer)
- Modal de confirmação
- Produtos relacionados
- Produtos em destaque
- Indicadores de estoque
- Compra rápida pelos cards
- Página 404 personalizada
- Persistência de dados com LocalStorage
- Filtro por categoria
- Busca por produtos
- Ordenação dinâmica
- Responsividade

---

# Possíveis Evoluções Futuras

- Integração com API real
- Sistema de autenticação
- Área do usuário
- Histórico de pedidos
- Paginação
- Skeleton Loading
- Testes automatizados
- Integração com gateway de pagamento
- Dashboard administrativo
- Melhorias de acessibilidade

---

# Considerações Finais

Este projeto foi desenvolvido com foco não apenas em atender os requisitos do desafio técnico, mas também em demonstrar organização, capacidade de resolução de problemas, componentização, gerenciamento de estado, integração com APIs e preocupação com experiência do usuário.

O objetivo foi construir uma aplicação próxima de um cenário real de mercado, aplicando conceitos modernos do ecossistema React e boas práticas de desenvolvimento Front-end.

---

# Autor

**Luan Orlandelli Ramos**

Projeto desenvolvido para processo seletivo de **Estágio em Desenvolvimento Front-end**.