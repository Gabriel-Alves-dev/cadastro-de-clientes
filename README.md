# Cadastro de Usuários

Este é um projeto React para cadastro de usuários, conectado a um servidor Node.js com banco de dados **MongoDB** utilizando **Prisma** como ORM. O projeto é configurado para ser executado com **Vite** e utiliza bibliotecas modernas para gerenciar a interface e interagir com APIs.

---

## 🚀 Funcionalidades

- Interface para cadastrar e listar usuários.
- Backend integrado com banco de dados **MongoDB**.
- Consumo de APIs utilizando **Axios**.
- Configuração otimizada para desenvolvimento com **Vite**.
- Análise de código com **ESLint**.
- Gerenciamento do banco de dados com **Prisma**.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces de usuário.
- **Vite**: Ferramenta rápida de desenvolvimento e build.
- **Axios**: Para consumo de APIs.
- **Node.js**: Backend para comunicação com o banco de dados.
- **Prisma**: ORM para modelagem e interação com o banco de dados.
- **MongoDB**: Banco de dados NoSQL utilizado para persistência dos dados.
- **ESLint**: Ferramenta de linting para código consistente.

---

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js instalado (versão recomendada: 16 ou superior)
- Gerenciador de pacotes (npm ou yarn)
- MongoDB configurado e rodando localmente ou na nuvem

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/Gabriel-Alves-dev/cadastro-de-clientes
   ```
2. Acesse a pasta do projetoitório:
   ```bash
   cd cadastro-de-usuarios
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto. Exemplo:
   ```plaintext
   DATABASE_URL=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<banco_de_dados>?retryWrites=true&w=majority
   ```
5. Execute o backend do projeto:
   ```bash
   node server.js /ou/ node --watch server.js
   ```
6. Inicie o frontend no modo de desenvolvimento:
   ```bash
   npm run dev
   ```
7. Acesse o projeto no navegador:
   ```bash
   http://localhost:5173
   ```
---

## 🌐 Estrutura do Projeto

### Frontend

- src: Contém os componentes e páginas do aplicativo.
- public: Arquivos estáticos.
  
### Backend
- Servidor Node.js configurado para interagir com o MongoDB utilizando o Prisma.
- Arquivo de configuração do Prisma (prisma/schema.prisma) para modelagem de dados.

---

##🗄️ Banco de Dados

O projeto utiliza MongoDB como banco de dados principal, configurado para conexão via string URI. O Prisma é usado para gerenciar e consultar o banco de dados.

### Configuração do Prisma

O esquema do Prisma está definido no arquivo prisma/schema.prisma. Certifique-se de rodar as migrações, se necessário:
   ```bash
   npx prisma db push
   ```

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
