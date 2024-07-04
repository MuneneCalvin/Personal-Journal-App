FROM node:18-alpine3.18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# RUN npm run dev
# TODO: Change to production build before deployment
RUN npm run build

EXPOSE 4200
CMD [ "npm", "start" ]