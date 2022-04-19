# Base image
FROM node:alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies and files
COPY ./package.json ./
RUN npm install

COPY ./ ./

# Default command
CMD ["npm", "start"]