# bankrupt-web

## Prerequisite
### Project setup
- npm 설치
- nextjs 프로젝트 설치 (src 사용 x)
```
apt-install npm
npx create-next-app@latest
```
### Install ESLint/Prettier
- ESLint는 프로젝트와 함께 설치 (VSCode Extension 설치 확인)
- Prettier 설치
- ESLint와 Prettier 동시 사용을 위한 플러그인 설치 (`.eslintrc.json` 파일에 "prettier" 추가)
- TypeScript 설정
```
npm install -D eslint
npm install -D prettier

npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev --save-exact prettier
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
### Install Chakra UI
```
npm i @chakra-ui/react @emotion/react
npx @chakra-ui/cli snippet add
```

## Columns
- index
- court
- seller
- title
- due
- category
- file

## Features
- Reads all boards ordered by created
  - GET /v1/board
- Reads boards in a specific category
  - GET /v1/board/{categoryId}
- Reads last synced time
  - GET /v1/sync/last
- Create/Update/Delete category
  - POST /v1/category
  - PUT /v1/category/{categoryId}
  - DELETE /v1/category/{categoryId}
- Create/Update/Delete category resoures
  - POST /v1/category/resource
  - PUT /v1/category/resource/{categoryResourceId}
  - DELETE /v1/category/resource/{categoryResourceId}
- Update re-arrange category relation
  - PUT /v1/category/relation
