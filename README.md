# etv-reviews
Review service for mock Target website item page.

This service uses an express server, a mongoDB+mongoose database, and a react frontend. The server seeds the database with N randomly-generated fake reviews, then serves the frontend over express to the client.

## Server API

### Get product review info
  * GET `/api/products/:product_id`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
    "product_id": "Number",
    "product_name": "String",
    "product_stars": "Number",
    "reviews" : [{
      "review_id": "Number",
      "title": "String",
      "name": "String",
      "stars": "Number",
      "verified": "Boolean",
      "date": "Date",
      "content": "String",
      "comfort": "Number",
      "style": "Number",
      "value": "Number",
      "sizing": "String",
      "photo": "String"
    }]

    }
```

### Add review to product
  * POST `/api/products/:product_id`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
    "product_id": "Number",
    "title": "String",
    "name": "String",
    "stars": "Number",
    "verified": "Boolean",
    "date": "Date",
    "content": "String",
    "comfort": "Number",
    "style": "Number",
    "value": "Number",
    "sizing": "String",
    "photo": "String",
    }
```


### Update review info
  * PATCH `/api/products/:product_id/:review_id`

**Path Parameters:**
  * `product_id` product id
  * `review_id` review id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
    "product_id": "Number",
    "review_id": "Number",
    "title": "String",
    "name": "String",
    "stars": "Number",
    "verified": "Boolean",
    "date": "Date",
    "content": "String",
    "comfort": "Number",
    "style": "Number",
    "value": "Number",
    "sizing": "String",
    "photo": "String",
    }
```

### Delete review from product
  * DELETE `/api/products/:product_id/:review_id`

**Path Parameters:**
  * `product_id` product id
  * `review_id` review id

**Success Status Code:** `204`