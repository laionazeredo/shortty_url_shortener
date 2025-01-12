# Usar uma imagem base oficial do Node.js
FROM node:23-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Construir a aplicação Next.js
RUN npm run build

# Expor a porta que a aplicação irá rodar
EXPOSE 3000

# Definir o comando de inicialização
CMD ["npm", "start"]
