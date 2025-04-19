# 1. Use the official Node.js base image (lightweight version)
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# 4. Copy all application files into the container
COPY . .

# 5. Expose port 3000 to allow external access
EXPOSE 3000

# 6. Define the command to start the application
CMD ["node", "server.js"]