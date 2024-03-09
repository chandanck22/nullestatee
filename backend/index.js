import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import listingRouter from './routes/listing.routes.js';
//import path from 'path';



// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode ||  500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.use('/api/user', userRouter); 
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// app.use(express.static(path.join(__dirname, "/client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });


// Run the server
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.log("Connection failed!", err);
});