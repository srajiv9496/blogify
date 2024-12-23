# Blogify

Blogify is a blog posting app that allows users to create, manage, and interact with blogs. It includes essential features such as user authentication, file uploads, commenting, and more.

## Features

- User Authentication: Secure login and authentication using JSON Web Tokens (JWT).

- Create and Manage Blogs: Users can create, edit, and delete their blogs.

- File Uploads: Allows users to upload files or images for their blogs.

- View Blogs: Browse and read blogs uploaded by all users.

- Commenting System: Comment on blogs to interact with other users.

## Prerequisites

- Ensure you have the following installed:

- Node.js (v16 or higher)

- MongoDB

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/srajiv9496/blogify.git
  cd blogify
  ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Set up the .env file with the following variables:
  ```bash
  PORT=3000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
```
4. Start the development server:
  ```bash
  npm run dev
  ```
## Usage

- Visit http://localhost:8000 in your browser.

- Register or log in to access the app.

- Create blogs, upload files, and interact with others by commenting on their posts.

## Tech Stack

- Backend: Node.js, Express.js

- Frontend: EJS (Embedded JavaScript Templates)

- Database: MongoDB

- Other Libraries:

  - jsonwebtoken for authentication

  - mongoose for database interaction

  - multer for handling file uploads

  - cookie-parser for parsing cookies

## Scripts

- npm run dev: Start the app in development mode with hot reloading (using Nodemon).

## File Structure

blogify/

├── models/          # Mongoose schemas for blogs and users

├── routes/          # Express routes for APIs

├── views/           # EJS templates

├── public/          # Static files (CSS, JS, images)

├── index.js         # App entry point

├── .env.example     # Example environment variables file

├── package.json     # Project metadata and dependencies


Feel free to explore and enjoy blogging with Blogify! For any issues or feature requests, please open an issue on GitHub.
