# Use official Node.js image as base
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app (except files in .dockerignore)
COPY . .

# Expose Vite default port
EXPOSE 5173
