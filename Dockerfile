# 1. Select Source image from docker Hub
FROM node:alpine

# 2. Set the app working directory
WORKDIR /usr/src/app

# 3. Copy file describing app package dependencies to image
COPY package.json .

# 4. Install app dependencies to image
RUN npm install

# 5. Copy App source to image
COPY . .

# 6. Expose image to local system 
EXPOSE 3000

# 7. Define app starting point to image
CMD ["npm", "start"]