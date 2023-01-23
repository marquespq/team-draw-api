FROM node:14.15-alpine

WORKDIR /usr/app

COPY package*.json yarn*.json ./

RUN npm install --production --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
