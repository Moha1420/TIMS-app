const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const TextBook = require('../model/textBookModel');

// Create a new text book
const createTextBook = async (req, res) => {
    try {
        const { title, author, edition, publisher, publicationYear, price, condition, ownerId } = req.body;

        // Create a new text book instance
        const newTextBook = new TextBook({ title, author, edition, publisher, publicationYear, price, condition, ownerId });

        // Save the new text book to the database
        await newTextBook.save();

        // Respond with success message and created text book object
        res.status(201).json({ message: 'Text book created successfully', textBook: newTextBook });
    } catch (error) {
        // Handle errors and respond with error message
        res.status(500).json({ error: error.message });
    }
};

// Get all text books
const getAllTextBooks = async (req, res) => {
    try {
        // Fetch all text books from the database
        const textBooks = await TextBook.find();

        // Respond with the fetched text books
        res.json(textBooks);
    } catch (error) {
        // Handle errors and respond with error message
        res.status(500).json({ error: error.message });
    }
};

// Get a single text book by ID
const getTextBookById = async (req, res) => {
    try {
        // Extract text book ID from request parameters
        const { id } = req.params;

        // Find the text book by ID in the database
        const textBook = await TextBook.findById(id);

        // Check if text book exists
        if (!textBook) {
            return res.status(404).json({ message: 'Text book not found' });
        }
           
        // Respond with the fetched text book
        res.json(textBook);
    } catch (error) {
        // Handle errors and respond with error message
        res.status(500).json({ error: error.message });
    }
};

// Update a text book by ID
const updateTextBookById = async (req, res) => {
    try {
        // Extract text book ID and updated data from request body
        const { id } = req.params;
        const updatedData = req.body;

        // Update the text book
        const updatedTextBook = await TextBook.findByIdAndUpdate(id, updatedData, { new: true });

        // Check if text book exists
        if (!updatedTextBook) {
            return res.status(404).json({ message: 'Text book not found' });
        }

        // Respond with success message and updated text book object
        res.json({ message: 'Text book updated successfully', textBook: updatedTextBook });
    } catch (error) {
        // Handle errors and respond with error message
        res.status(500).json({ error: error.message });
    }
};

// Delete a text book by ID
const deleteTextBookById = async (req, res) => {
    try {
        // Extract text book ID from request parameters
        const { id } = req.params;

        // Delete the text book from the database
        const deletedTextBook = await TextBook.findByIdAndDelete(id);

        // Check if text book exists
        if (!deletedTextBook) {
            return res.status(404).json({ message: 'Text book not found' });
        }

        // Respond with success message and deleted text book object
        res.json({ message: 'Text book deleted successfully', textBook: deletedTextBook });
    } catch (error) {
        // Handle errors and respond with error message
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTextBook,
    getAllTextBooks,
    getTextBookById,
    updateTextBookById,
    deleteTextBookById
};
