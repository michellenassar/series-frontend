FROM node:23-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .
 
# Expose port 3000 (React default dev server port)
EXPOSE 3000

# Run the development server
CMD ["npm", "start"]
