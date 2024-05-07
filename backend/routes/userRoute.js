const express = require("express");
const router = express.Router();
const { protect, restrict } = require('../middleware/authMiddleware');
const { userValidator } = require('../middleware/userValidator');
const {
    register,
    login,
    adminLogin,
    getProfile,
    updateProfile,
    deleteProfile,
    getAllUsers,
    getUserById,
    forgetPassword,
    resetPassword,
} = require('../controllers/UserController');

const {
    createUser,
    updateUser,
    deleteUser,
    createAdmin
} = require('../controllers/userAccountController');

// Route to register a new user
exports.signup = async (req, res) => {
       // Extract user data from request body
       const { name, email, password, username, phoneNumber, mainAddress } = req.body;
   
       try {
           // Check if the email is already registered
           const existingUser = await User.findOne({ email });
           if (existingUser) {
               return res.status(400).json({ message: 'Email is already registered' });
           }
   
           // Create a new user instance
           const newUser = new User({
               name,
               email,
               password,
               username,
               phoneNumber,
               mainAddress
           });
   
           // Save the user to the database
           const savedUser = await newUser.save();
           
           // Return success response
           res.status(201).json(savedUser);
       } catch (err) {
           // Handle errors
           res.status(500).json({ message: err.message });
       }
   };
// Route to log in a user
router.post('/login', login);

// Route to log in an admin
router.post('/adminLogin', adminLogin);

// Route to get user profile
router.get('/getProfile', protect, getProfile);

// Route to get user profile by ID
router.get('/getbyid/:id', protect, getUserById);

// Route to update user profile by ID
router.put('/updateProfile/:id', protect, updateProfile);

// Route to delete user profile by ID
router.delete('/deleteProfile/:id', protect, deleteProfile);

// Route to request password reset
router.post('/forgetPassword', forgetPassword);

// Route to reset password using token
router.post('/resetPassword', resetPassword);

// Route to get all users (accessible only to admin and superadmin)
router.get('/getAllUsers', protect, restrict('admin', 'superadmin'), getAllUsers);

// Route to create a new admin (accessible only to superadmin)
router.post('/createAdmin', protect, restrict('superadmin'), createAdmin);

// Route to update user by ID (accessible only to admin and superadmin)
router.put('/updateUser/:id', protect, restrict('admin', 'superadmin'), updateUser);

// Route to delete user by ID (accessible only to admin and superadmin)
router.delete('/deleteUser/:id', protect, restrict('admin', 'superadmin'), deleteUser);

// Route to create a new user (accessible only to admin and superadmin)
router.post('/createUser', protect, restrict('admin', 'superadmin'), createUser);

module.exports = router;
