# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their email, first name, last name, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned for authentication.

## Request Body
The request body must be in JSON format and should include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (minimum length: 3 characters).
  - `lastname`: A string representing the user's last name (optional).
- `email`: A string representing the user's email address (must be a valid email format).
- `password`: A string representing the user's password (minimum length: 6 characters).

### Example Request
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}

## Responses
- **201 Created**: User successfully registered. Returns the generated JWT and user information.
- **400 Bad Request**: Validation errors occurred. Returns an array of error messages.

### Example Response
{
  "token": "your_jwt_token",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

## Status Codes
- `201`: User created successfully.
- `400`: Validation errors.
# UBER-VIDEOS API Documentation

## Endpoints

---

### 1. `/users/register`

**Method:** `POST`

**Description:** Registers a new user in the system.

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}{
  "token": "your_jwt_token",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}#   H O T E L B O O K I N G  
 