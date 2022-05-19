FROM node:16-alpine

WORKDIR /

RUN mkdir app/backend/build/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]