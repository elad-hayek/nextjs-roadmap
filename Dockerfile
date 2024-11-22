
# Use Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

