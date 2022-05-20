FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT ["node", "./app/app/backend/build/server"]