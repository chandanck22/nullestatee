 # MERN NullEstate Application
NullEstate is a web application designed for users to buy or rent houses. It provides a platform where sellers can upload their properties for sale or rent, while buyers can browse listings and make inquiries. The project is built using Node.js, Express, MongoDB, and Firebase for authentication.


## Features
- **User Authentication:** Secure user authentication system with features for signup, login, and Google authentication.
- **Property Listings:** Sellers can upload details of their properties, including images, descriptions, and pricing.
- **Property Search:** Buyers can search for properties based on various criteria such as location, price, and type.
- **User Profiles:** Users can create profiles to manage their listings, inquiries, and account settings.



## Backend
1. Clone this repository to your local machine.
```bash
git clone https://github.com/chandanck22/nullestate.git
```
2. Create a `.env` file in the root directory and add your MongoDB connection URL:
```bash
MONGO = "PASTE_DATABASE_URL"
```
```bash
JWT_SECRET = "secrettoken"
```
3. Install dependencies by running 
```bash 
npm install
```
4. Start the application by running 
```js
npm run dev
```
5. The backend server will start on port 3000.

## Fronted
1. Navigate to the `client` directory:
```bash
cd client
```

2. Replace the file firebase.js with your Firebase configuration code.

3. Create a .env file in the client directory and add your Firebase API key:

```bash
VITE_FIREBASE_API_KEY = "PASTE_FIREBASE_API_KEY"
```


3. Install dependencies by running 

```bash
npm install
```
4. Start the application by running 
```bash
npm run dev
```
5. The frontend server will start on port 5173.


## Dependencies
- **express**: Express is a fast, unopinionated, minimalist web framework for Node.js. It simplifies the process of building web applications and APIs.

- **mongodb**: MongoDB is a NoSQL database program, which uses JSON-like documents with optional schemas.

- **mongoose:** Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data.

- **nodemon:** Nodemon is a utility that monitors for changes in your source code and automatically restarts the server. It's useful during development to streamline the development process.

- **bcryptjs** It is a library to hash passwords and compare hashed passwords with the original one.

- **cookie-parser** Parsing cookies for session management.

- **dotenv** Loading environment variables from a .env file.

- **jsonwebtoken** Generating and verifying JSON Web Tokens (JWT) for user authentication.