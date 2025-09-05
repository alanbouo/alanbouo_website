FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache bash curl wget
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["sh", "-c", "HOST=0.0.0.0 npm start"]