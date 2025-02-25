
# Micro Frontend com Webpack Module Federation

Este projeto demonstra a implementação de **Micro Frontends** utilizando **Webpack Module Federation**. Ele é composto por duas aplicações:

1. **Host App (`host-app`)**: A aplicação principal que consome o micro frontend.
2. **Remote App (`remote-app`)**: O micro frontend que expõe um componente para ser carregado dinamicamente pelo host.

---

## 📌 Tecnologias Utilizadas

- **React** (18+)
- **Webpack 5** (Module Federation)
- **Babel** (para transpilar o código)
- **Webpack Dev Server** (para rodar localmente)
- **HTML Webpack Plugin** (para injetar os scripts no HTML)

---

## 📂 Estrutura do Projeto

```
📦 micro-frontend-project
 ├── 📂 host-app (Aplicação Principal)
 │   ├── 📂 src
 │   │   ├── 📜 App.js
 │   │   ├── 📜 bootstrap.js
 │   │   ├── 📜 index.js
 │   ├── 📜 package.json
 │   ├── 📜 webpack.config.js
 │   ├── 📜 index.html
 │   ├── 📜 .babelrc
 │   ├── 📜 .gitignore
 ├── 📂 remote-app (Micro Frontend)
 │   ├── 📂 src
 │   │   ├── 📂 components
 │   │   │   ├── 📜 Button.js
 │   │   ├── 📜 bootstrap.js
 │   │   ├── 📜 index.js
 │   ├── 📜 package.json
 │   ├── 📜 webpack.config.js
 │   ├── 📜 index.html
 │   ├── 📜 .babelrc
 │   ├── 📜 .gitignore
```


## 🚀 Como Instalar e Executar

### 1️⃣ Clonar o Repositório
```sh
git clone https://github.com/seu-usuario/micro-frontend-webpack.git
cd micro-frontend-webpack
```

### 2️⃣ Instalar as Dependências
```sh
cd host-app
npm install
cd ../remote-app
npm install
```

### 3️⃣ Rodar os Projetos
Execute cada projeto em terminais separados:

#### 📌 Executar o **Remote App** (Micro Frontend)
```sh
cd remote-app
npm start
```
Será iniciado em `http://localhost:3001`

#### 📌 Executar o **Host App** (Aplicação Principal)
```sh
cd host-app
npm start
```
Será iniciado em `http://localhost:3000`

---

## 🎯 Como Funciona?

- O **Remote App (`remote-app`)** expõe um componente `Button.js` através do Webpack Module Federation.
- O **Host App (`host-app`)** consome dinamicamente esse componente e o renderiza em sua interface.
- Os dois aplicativos são independentes, permitindo **deploys separados**.

---

## 🔗 Comunicação entre os Micro Frontends

A configuração do Webpack no **Host App (`host-app`)** define a dependência do **Remote App (`remote-app`)**:

```javascript
new ModuleFederationPlugin({
  name: "hostApp",
  remotes: {
    remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
}),
```

Já no **Remote App (`remote-app`)**, o Webpack expõe o componente `Button.js`:

```javascript
new ModuleFederationPlugin({
  name: "remoteApp",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button",
  },
  shared: ["react", "react-dom"],
}),
```

---

## 🛠 Possíveis Melhorias

- 📌 Adicionar **estilização global compartilhada** para manter a consistência visual.
- 📌 Implementar **gerenciamento de estado global** para compartilhar dados entre os micro frontends.
- 📌 Configurar **autenticação centralizada** para múltiplos MFEs.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.

---

💡 **Desenvolvido para demonstrar o conceito de Micro Frontends!** 🚀
```

---

### **📌 O que esse README contém?**
✅ **Explicação do projeto**  
✅ **Tecnologias utilizadas**  
✅ **Passos de instalação e execução**  
✅ **Explicação da comunicação entre os MFEs**  
✅ **Sugestões de melhorias**  
✅ **Informações sobre contribuição e licença**  

Se precisar de algo mais detalhado ou ajustes, é só avisar! 🚀😃