
---

# Blogging Application

This is a MERN (MongoDB, Express, React, Node.js) based application for a blogging platform. This project demonstrates a full-stack application with CRUD operations, authentication, and more.

## Project Structure

The project is organized into two main directories:

- `backend`: The server side, built with Node.js and Express, with MongoDB as the database.
- `frontend`: The client side, built with React.js.

## Prerequisites

- [Node.js](https://nodejs.org/) - Make sure Node.js is installed.
- [MongoDB](https://www.mongodb.com/) - Set up a MongoDB instance. You can use MongoDB Atlas for a cloud-based database.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amits723/Blogging-Application.git
   cd Blogging-Application
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**: 

   - In the `backend` folder, create a `.env` file with the following keys:

     ```
     DB_USERNAME=<Your MongoDB Username>
     DB_PASSWORD=<Your MongoDB Password>
     DB_NAME=blogDb
     PORT=8000
     ```

## Usage

- **Run the backend server**:
  ```bash
  cd backend
  npm start
  ```

- **Run the frontend server**:
  ```bash
  cd ../frontend
  npm start
  ```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. 

## Credits

This project was created by following [this YouTube tutorial](https://youtu.be/VrQgmNY96wo?si=Ojau1IWzN-3sOaul).

---
