# Use official Node.js image as base
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install

# Copy the rest of the app (except files in .dockerignore)
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start Vite dev server with polling for hot reload
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--watch"]
