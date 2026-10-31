# Micro Frontends - Restaurante

Projeto desenvolvido com Next.js e Module Federation, utilizando a arquitetura de Micro Frontends para separar o cardápio e os pedidos em aplicações independentes, integradas por uma aplicação principal (Container).

## Estrutura do projeto

```text
micro-frontends-pedidos/
│
├── container-app/
│   └── Aplicação principal
│
├── micro-cardapio/
│   └── Micro Frontend do cardápio
│
├── micro-pedido/
│   └── Micro Frontend dos pedidos
│
└── README.md
```

## Tecnologias utilizadas

- Next.js
- React
- JavaScript
- Module Federation
- Webpack
- CSS

## Aplicações

### 1. Container App

Aplicação principal responsável por integrar os Micro Frontends.

- Carrega os módulos remotos.
- Utiliza React.lazy e Suspense.
- Apresenta o cardápio e a área de pedidos em uma única interface.

### 2. Micro Cardápio

Aplicação responsável pela exibição dos pratos disponíveis.

- Apresenta nome, descrição e preço dos produtos.
- Permite adicionar pratos ao pedido.
- Expõe o componente Menu por meio do Module Federation.

### 3. Micro Pedido

Aplicação responsável pelo gerenciamento visual do pedido.

- Recebe os pratos adicionados.
- Exibe os itens selecionados.
- Calcula e apresenta o valor total.
- Expõe o componente Pedido por meio do Module Federation.

## Comunicação entre os Micro Frontends

A comunicação entre o cardápio e o pedido é realizada por meio de eventos personalizados do navegador (`CustomEvent`).

Quando o usuário clica em "Adicionar ao pedido", o Micro Cardápio dispara o evento `order:add`, enviando os dados do prato.

O Micro Pedido escuta esse evento utilizando `window.addEventListener`, atualiza a lista de itens e recalcula o total.

## Como executar o projeto

É necessário ter Node.js e npm instalados.

O projeto possui três aplicações independentes. Para executá-las, abra três terminais separados.

**Terminal 1 - Micro Cardápio**

```bash
cd micro-cardapio
npm install
npm run dev
```

Acesse: http://localhost:3001

**Terminal 2 - Micro Pedido**

```bash
cd micro-pedido
npm install
npm run dev
```

Acesse: http://localhost:3002

**Terminal 3 - Container App**

```bash
cd container-app
npm install
npm run dev
```

Acesse: http://localhost:3010

## Funcionalidades implementadas

- Integração de três aplicações independentes.
- Compartilhamento de componentes com Module Federation.
- Carregamento dos módulos remotos.
- Comunicação por eventos personalizados.
- Adição de pratos ao pedido.
- Cálculo automático do total.
- Interface responsiva.

## Objetivo

Demonstrar a implementação de uma arquitetura de Micro Frontends, promovendo modularidade, independência entre aplicações e integração de componentes em uma aplicação principal.
