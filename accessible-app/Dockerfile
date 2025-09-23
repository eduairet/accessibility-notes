FROM node:current-alpine3.22 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
