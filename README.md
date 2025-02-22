
# FixErrorCode

This project aims to provide a large database of error codes related to hardware and software and detailed guide to fix them.

## Features

- Search for error codes
- Get descriptions of error codes
- Get solutions to solve error codes
- Get step by step instructions to fix errors
- Access additional resources related to error codes (documents, images, videos ...)


## Run Locally

Clone the project

```bash
  git clone https://github.com/keglostephane/fixerrcode.git
```

Go to the project directory

```bash
  cd fixerrcode
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```




## API Reference

#### Get all errors code

```http
  GET /api/v1/errors
  GET /api/v1/erros/?page=1&limit=10
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` | **Optional**. The page number |
| `limit` | `string | **Optional**. The number of errrors requested

#### Get error code details

```http
  GET /api/v1/errors/${code}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `code`      | `string` | **Required**. The error code |

#### Get the error code description

```http
  GET /api/v1/errors/${code}/message
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `code`      | `string` | **Required**. The error code |

#### Get the solutions of the error code

```http
  GET /api/v1/errors/${code}/solutions
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `code`      | `string` | **Required**. The error code |

#### List all tags

```http
  GET /api/v1/tags?page=1&limit=10
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` | **Optional**. The page number |
| `limit` | `string | **Optional**. The number of tags requested


#### List tags of an error code

```http
  GET /api/v1/tags/error/${code}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `code`      | `string` | **Required**. The error code |







## Usage/Examples

Use the admin panel to manage data of the API:

```
http://locacalhost:3000/admin/
```
 ## Demo
 
  [![Fixerrcode Demonstration](http://i3.ytimg.com/vi/JAYETXhKiTs/hqdefault.jpg)](https://youtu.be/JAYETXhKiTs)
