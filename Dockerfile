# 1. Use Node 18 as the base engine
FROM node:18

# 2. Set the workspace
WORKDIR /app

# 3. Copy the 'Parts List' (package.json) first
COPY package.json ./

# 4. FORCE the installation of the tools (The Build Command)
RUN npm install

# 5. Copy the rest of the Ark's code
COPY . .

# 6. Ignite the heart (index.js)
CMD ["node", "index.js"]
