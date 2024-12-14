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
