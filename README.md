# bankrupt-web

## Prerequisite
### Project setup
```
apt-install npm
```
```
npx create-next-app@latest
```
### Install Chakra UI
```
npm i @chakra-ui/react @emotion/react
```
```
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
