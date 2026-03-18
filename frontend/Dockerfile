FROM node:20

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

# 15.1.0 固定に加えて、足りない Tailwind 関連を追加
RUN npm install --save-exact next@15.1.0 react@19.0.0 react-dom@19.0.0
# Tailwind CSS v4 系の動作に必要なセットを追加
RUN npm install --save-dev tailwindcss@4.0.0 @tailwindcss/postcss postcss

RUN npm install

COPY . .

RUN chmod -R 755 /app/node_modules/.bin

ENV NEXT_OTEL_FETCH_DISABLED=1
ENV WATCHPACK_POLLING=true

EXPOSE 3000

# 中身を掃除して起動
CMD ["sh", "-c", "find .next -mindepth 1 -delete || true; npm run dev"]