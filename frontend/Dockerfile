FROM node:20-slim

# OSのライブラリ（念のため）を更新
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 1. まず設定ファイルだけコピー
COPY package*.json ./

# 2. 【重要】ビルドの段階でインストールを済ませてしまう
RUN npm install

# 3. 残りのファイルをコピー
COPY . .

# 4. 実行権限を整える
RUN chmod -R 755 /app/node_modules/.bin

EXPOSE 3000

# 5. 起動時は install をせず、即実行する
CMD ["npm", "run", "dev"]