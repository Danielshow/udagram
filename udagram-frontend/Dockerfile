## Build
FROM beevelop/ionic:latest AS ionic
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
# Bind the port that the image will run on
EXPOSE 80
# Define the Docker image's behavior at runtime
CMD ["npm", "run", "start"]