# Użyj oficjalnego obrazu Node.js jako obrazu bazowego
FROM node:lts

WORKDIR /usr/games/app/app-vite

COPY ./frontend/app-vite .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
