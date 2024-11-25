# bankrupt-web

## Features
- Shows all boards ordered by created
  - GET /v1/board
- Shows boards in a specific category
  - GET /v1/board/{categoryId}
- Shows last synced time
  - GET /v1/sync/last
- Edits category
  - POST /v1/category
  - PUT /v1/category/{categoryId}
  - DELETE /v1/category/{categoryId}
- Edits category resoures
  - POST /v1/category/resource
  - PUT /v1/category/resource/{categoryResourceId}
  - DELETE /v1/category/resource/{categoryResourceId}
- Triggers re-categorization
  - PUT /v1/category/relation
