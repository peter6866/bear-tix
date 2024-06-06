FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install pnpm -g
RUN pnpm install -P
COPY . .

CMD ["pnpm", "start"]