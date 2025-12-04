# Use official Node LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy application code
COPY . .

# App command (this app does not run a server, so we use a simple CMD)
CMD ["node", "src/math.js"]
