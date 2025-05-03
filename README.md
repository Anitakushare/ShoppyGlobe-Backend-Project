# 🛒 ShoppyGlobe Backend
Welcome to the backend of ShoppyGlobe, an eCommerce application built with Node.js, Express, MongoDB, and JWT authentication.

## 📦 Features
- GET /products – Fetch all products
- GET /products/:id
  Fetch a single product using its dynamic id.
- POST /cart – Add a product to cart
- PUT /cart/:id – Update product quantity in cart
- DELETE /cart/:id – Remove product from cart
 
## 👤 Authentication & Authorization 
- User Authentication API
- JWT Authentication implemented
- POST /register – Register a user
- POST /login – User login, returns JWT
- All cart routes are protected (JWT required)
 
## 🔐 Middleware
- JWT authentication for protected routes.
- Duplicate cart entry prevention.

## ThunderClient API Testing 
All routes tested using ThunderClient

## 🛠 Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Token)
- ThunderClient for API testing
 
## 📦 Setup & Run Locally
## 1. Clone the Repo
 ```markdown
    - git clone https://github.com/your-username/ShoppyGlobe-Backend-Project.git
   - cd ShoppyGlobe-Backend-Project
```
## 2. Install Dependencies
   npm install

## 3. Create a .env File
```markdown
PORT=3000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret_key 
```
## 4. Start the Server
- npm run dev
