const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { finduser } = require("../models/userModel"); // Your DB function

// Login Controller
const login = async (req, res) => {
    try {
        // Destructure user_id and password from request body
        const { user_id, password } = req.body;

        // Validate input
        if (!user_id || !password) {
            return res.status(400).json({ message: "UserID and password required" });
        }

        // Find user in database
        const user = await finduser(user_id);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare provided password with hashed password in DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Send response
        res.json({
            message: "Login successful",
            token,
            role: user.role
        });

    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { login };
