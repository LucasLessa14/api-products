FROM node:12.18.3-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "start"]