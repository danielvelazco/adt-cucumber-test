# Use Node.js official image
FROM node:22

# Copy package.json and package-lock.json (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Run Cucumber test
CMD ["npm", "run", "test"]
