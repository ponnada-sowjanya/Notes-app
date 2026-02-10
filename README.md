📝 Notes App – Full Stack MERN Application

A full-stack Notes Application built using the MERN stack that allows users to securely create, update, delete, and manage personal notes.

This project was developed as a personal learning project to strengthen backend development, authentication, and CRUD operations.

**🚀 Features**

- 🔐 User Authentication (Register & Login)

- 🔑 JWT-based Authorization

- 📝 Create Notes

- ✏️ Edit Notes

- 🗑 Delete Notes

- 📄 View All Notes

- 🔒 Protected Routes

- 🌐 REST API integration

**🛠 Tech Stack**
- Frontend

- React.js

- Axios

- Tailwind CSS / CSS (whichever you used)

- Backend

- Node.js

- Express.js

- MongoDB

- Mongoose

- JWT Authentication

- bcrypt (Password hashing)

**📂 Project Structure**
Notes-app/
│
├── client/        # React frontend
├── server/        # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js

🔐 Authentication Flow

- User registers with email & password

- Password is hashed using bcrypt

- JWT token is generated upon login

- Token is sent in headers for protected routes

- Notes are stored per authenticated user

**🧠 Backend Functionalities**

- RESTful API design

- Middleware for authentication

- MongoDB Atlas integration

- Error handling

- Environment variables (.env)

**📦 Installation & Setup**
1️⃣ Clone the repository
git clone https://github.com/ponnada-sowjanya/Notes-app.git
cd Notes-app

2️⃣ Setup Backend
cd server
npm install
npm start

3️⃣ Setup Frontend
cd client
npm install
npm start

**🌍 Environment Variables**

Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

**🎯 Learning Outcomes**

Through this project, I gained experience in:

- Full-stack development

- API creation using Express

- MongoDB database design

- JWT authentication

- Protected routes

- Frontend-backend integration using Axios

- Debugging and deployment readiness

**📌 Future Improvements**

- Add search functionality

- Add note categories

- Add user profile page

- Deploy backend + frontend
