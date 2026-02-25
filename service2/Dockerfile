# Utiliser une image Node.js officielle comme base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et installer les dépendances
COPY package.json ./
RUN npm install

# Copier le reste du code (server.js)
COPY . .

# Exposer le port que l'application utilise
EXPOSE 8080

# Commande pour démarrer l'application
CMD ["node", "server.js"]